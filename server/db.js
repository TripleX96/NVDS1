const mysql = require('mysql2/promise');

const MYSQL_ENABLED = Boolean(
  process.env.MYSQL_HOST
  || process.env.MYSQL_URL
  || process.env.MYSQL_USER
  || process.env.MYSQL_DATABASE
);

const TABLE_PREFIX = process.env.MYSQL_TABLE_PREFIX || 'nvds_';
const CONTENT_TABLE = `${TABLE_PREFIX}content`;
const IMAGES_TABLE = `${TABLE_PREFIX}images`;

let pool;
let initPromise = null;

function isEnabled() {
  return MYSQL_ENABLED;
}

function getPoolOptions() {
  if (process.env.MYSQL_URL) {
    return process.env.MYSQL_URL;
  }
  return {
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'nvds',
    waitForConnections: true,
    connectionLimit: Number(process.env.MYSQL_POOL_SIZE || 10),
    timezone: 'Z',
  };
}

async function ensureTables(targetPool) {
  await targetPool.query(`
    CREATE TABLE IF NOT EXISTS \`${CONTENT_TABLE}\` (
      content_key VARCHAR(191) NOT NULL,
      content_value TEXT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (content_key)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  await targetPool.query(`
    CREATE TABLE IF NOT EXISTS \`${IMAGES_TABLE}\` (
      slot_id VARCHAR(191) NOT NULL,
      file_path VARCHAR(512) NOT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (slot_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

async function getPool() {
  if (!MYSQL_ENABLED) {
    throw new Error('MySQL is not configured. Please set MYSQL_* environment variables.');
  }
  if (pool) return pool;
  if (!initPromise) {
    pool = mysql.createPool(getPoolOptions());
    initPromise = ensureTables(pool);
  }
  await initPromise;
  return pool;
}

async function loadContent() {
  const targetPool = await getPool();
  const [rows] = await targetPool.query(
    `SELECT content_key, content_value, updated_at FROM \`${CONTENT_TABLE}\``,
  );
  const content = {};
  let latest = null;
  rows.forEach((row) => {
    content[row.content_key] = row.content_value ?? '';
    if (!latest || row.updated_at > latest) {
      latest = row.updated_at;
    }
  });
  return {
    content,
    updatedAt: latest ? new Date(latest).toISOString() : null,
  };
}

async function saveContent(newContent) {
  const entries = Object.entries(newContent || {});
  const targetPool = await getPool();
  await targetPool.query('START TRANSACTION');
  try {
    await targetPool.query(`DELETE FROM \`${CONTENT_TABLE}\``);
    if (entries.length) {
      const placeholders = entries.map(() => '(?, ?)').join(', ');
      const values = entries.flatMap(([key, value]) => [key, value]);
      await targetPool.query(
        `INSERT INTO \`${CONTENT_TABLE}\` (content_key, content_value) VALUES ${placeholders}`,
        values,
      );
    }
    await targetPool.query('COMMIT');
  } catch (error) {
    await targetPool.query('ROLLBACK');
    throw error;
  }
  return loadContent();
}

async function listImages() {
  const targetPool = await getPool();
  const [rows] = await targetPool.query(
    `SELECT slot_id, file_path FROM \`${IMAGES_TABLE}\``,
  );
  const map = {};
  rows.forEach((row) => {
    map[row.slot_id] = row.file_path;
  });
  return map;
}

async function saveImage(slotId, filePath) {
  const targetPool = await getPool();
  await targetPool.query(
    `REPLACE INTO \`${IMAGES_TABLE}\` (slot_id, file_path, updated_at)
     VALUES (?, ?, CURRENT_TIMESTAMP)`,
    [slotId, filePath],
  );
}

async function deleteImage(slotId) {
  const targetPool = await getPool();
  await targetPool.query(
    `DELETE FROM \`${IMAGES_TABLE}\` WHERE slot_id = ?`,
    [slotId],
  );
}

module.exports = {
  isEnabled,
  loadContent,
  saveContent,
  listImages,
  saveImage,
  deleteImage,
};
