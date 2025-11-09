const path = require('path');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const morgan = require('morgan');

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

async function readContent() {
  if (cachedContent) return cachedContent;
  try {
    const payload = await fs.readJson(CONTENT_FILE);
    if (payload && typeof payload.content === 'object') {
      cachedContent = payload.content;
      return cachedContent;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn('Unable to read content.json. Using empty payload.');
    }
  }
  cachedContent = {};
  return cachedContent;
}

async function writeContent(content) {
  cachedContent = { ...content };
  const payload = {
    content: cachedContent,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeJson(CONTENT_FILE, payload, { spaces: 2 });
  return payload;
}

async function listSlotFiles() {
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
}

async function persistImage(slotId, file) {
  const ext = path.extname(file.originalname || '') || '.webp';
  const filename = `${slotId}${ext.toLowerCase()}`;
  await removeSlotFiles(slotId);
  const target = path.join(UPLOAD_DIR, filename);
  await fs.writeFile(target, file.buffer);
  return `/assets/uploads/${filename}`;
}

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.get('/api/content', async (_req, res) => {
  const content = await readContent();
  res.json({ content, updatedAt: new Date().toISOString() });
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
