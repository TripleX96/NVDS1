const path = require('path');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const morgan = require('morgan');
const database = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;
const ROOT_DIR = path.join(__dirname, '..');
const DATA_DIR = path.join(__dirname, 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const UPLOAD_DIR = path.join(ROOT_DIR, 'assets', 'uploads');

fs.ensureDirSync(DATA_DIR);
fs.ensureDirSync(UPLOAD_DIR);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: Number(process.env.MAX_IMAGE_SIZE || 8 * 1024 * 1024), // 8 MB default
  },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only image uploads are allowed.'));
      return;
    }
    cb(null, true);
  },
});

let cachedContent = null;
let cachedUpdatedAt = null;

async function readContent() {
  if (cachedContent) {
    return { content: cachedContent, updatedAt: cachedUpdatedAt };
  }
  if (database.isEnabled()) {
    try {
      const payload = await database.loadContent();
      cachedContent = payload.content || {};
      cachedUpdatedAt = payload.updatedAt || null;
      return { content: cachedContent, updatedAt: cachedUpdatedAt };
    } catch (error) {
      console.error('Unable to read content from MySQL. Falling back to JSON store.', error);
    }
  }
  try {
    const payload = await fs.readJson(CONTENT_FILE);
    if (payload && typeof payload.content === 'object') {
      cachedContent = payload.content;
      cachedUpdatedAt = payload.updatedAt || null;
      return { content: cachedContent, updatedAt: cachedUpdatedAt };
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn('Unable to read content.json. Using empty payload.', error);
    }
  }
  cachedContent = {};
  cachedUpdatedAt = null;
  return { content: cachedContent, updatedAt: cachedUpdatedAt };
}

async function writeContent(content) {
  if (database.isEnabled()) {
    try {
      const payload = await database.saveContent(content);
      cachedContent = payload.content || {};
      cachedUpdatedAt = payload.updatedAt || new Date().toISOString();
      return { content: cachedContent, updatedAt: cachedUpdatedAt };
    } catch (error) {
      console.error('Unable to persist content to MySQL. Falling back to JSON store.', error);
    }
  }
  cachedContent = { ...content };
  cachedUpdatedAt = new Date().toISOString();
  const payload = {
    content: cachedContent,
    updatedAt: cachedUpdatedAt,
  };
  await fs.writeJson(CONTENT_FILE, payload, { spaces: 2 });
  return payload;
}

async function listSlotFiles() {
  if (database.isEnabled()) {
    try {
      const stored = await database.listImages();
      if (stored && Object.keys(stored).length) {
        return stored;
      }
      // Fall back to the filesystem so legacy uploads still work even if the DB
      // has not been populated yet.
    } catch (error) {
      console.error('Unable to list images from MySQL. Falling back to filesystem.', error);
    }
  }
  const entries = await fs.readdir(UPLOAD_DIR);
  const map = {};
  entries.forEach((name) => {
    const slotId = name.replace(/\.[^.]+$/, '');
    map[slotId] = `/assets/uploads/${name}`;
  });
  return map;
}

async function removeSlotFiles(slotId) {
  const entries = await fs.readdir(UPLOAD_DIR);
  await Promise.all(
    entries
      .filter((name) => name.startsWith(`${slotId}.`))
      .map((name) => fs.remove(path.join(UPLOAD_DIR, name)))
  );
  if (database.isEnabled()) {
    try {
      await database.deleteImage(slotId);
    } catch (error) {
      console.error('Unable to delete image metadata in MySQL.', error);
    }
  }
}

async function persistImage(slotId, file) {
  const ext = path.extname(file.originalname || '') || '.webp';
  const filename = `${slotId}${ext.toLowerCase()}`;
  await removeSlotFiles(slotId);
  const target = path.join(UPLOAD_DIR, filename);
  await fs.writeFile(target, file.buffer);
  const publicPath = `/assets/uploads/${filename}`;
  if (database.isEnabled()) {
    try {
      await database.saveImage(slotId, publicPath);
    } catch (error) {
      console.error('Unable to persist image metadata in MySQL.', error);
    }
  }
  return publicPath;
}

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.get('/api/content', async (_req, res) => {
  const payload = await readContent();
  res.json({
    content: payload.content,
    updatedAt: payload.updatedAt || new Date().toISOString(),
  });
});

app.put('/api/content', async (req, res) => {
  const { content } = req.body || {};
  if (!content || typeof content !== 'object') {
    res.status(400).json({ error: 'Request body must include a content object.' });
    return;
  }
  const sanitized = {};
  Object.entries(content).forEach(([key, value]) => {
    if (typeof value === 'string') {
      sanitized[key] = value;
    }
  });
  const payload = await writeContent(sanitized);
  res.json({ content: payload.content, updatedAt: payload.updatedAt });
});

app.get('/api/images', async (_req, res) => {
  const images = await listSlotFiles();
  res.json({ images });
});

app.post('/api/images/:slotId', upload.single('file'), async (req, res) => {
  const { slotId } = req.params;
  if (!slotId) {
    res.status(400).json({ error: 'slotId is required.' });
    return;
  }
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded.' });
    return;
  }
  try {
    const publicUrl = await persistImage(slotId, req.file);
    res.json({ slotId, url: `${publicUrl}?v=${Date.now()}` });
  } catch (error) {
    console.error('Unable to persist image:', error);
    res.status(500).json({ error: 'Failed to save image.' });
  }
});

app.delete('/api/images/:slotId', async (req, res) => {
  const { slotId } = req.params;
  if (!slotId) {
    res.status(400).json({ error: 'slotId is required.' });
    return;
  }
  await removeSlotFiles(slotId);
  res.json({ slotId });
});

app.use('/assets/uploads', express.static(UPLOAD_DIR, { maxAge: '1d' }));
app.use(express.static(ROOT_DIR));

function startServer() {
  return app.listen(PORT, () => {
    console.log(`NVDS admin backend listening on http://localhost:${PORT}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
