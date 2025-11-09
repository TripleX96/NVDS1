## NVDS Admin Backend

This repository now includes a lightweight Node.js/Express backend that persists
admin edits (text and images) to disk so they can be served to every visitor.

### Quick start

```bash
npm install
npm run dev   # starts http://localhost:4000 with autoreload
# or
npm start     # production mode
```

- HTML/CSS/JS are served from the repo root.
- API routes live under `/api`.
- Uploaded images are written to `assets/uploads/` so existing markup can reuse
  the same relative paths. Only placeholders are tracked in git; real uploads
  stay local.

### Using MySQL storage

By default, text content is persisted to `server/data/content.json` and image
metadata is inferred from the files on disk. If you prefer a database-backed
workflow, provide MySQL credentials through environment variables before
starting the server:

| Variable            | Description                                   |
|---------------------|-----------------------------------------------|
| `MYSQL_HOST`        | Database host (default: `localhost`)          |
| `MYSQL_PORT`        | Port number (default: `3306`)                 |
| `MYSQL_USER`        | Username (default: `root`)                    |
| `MYSQL_PASSWORD`    | Password                                      |
| `MYSQL_DATABASE`    | Database/schema to use (default: `nvds`)      |
| `MYSQL_URL`         | Optional connection string (`mysql://...`)    |
| `MYSQL_TABLE_PREFIX`| Prefix for the generated tables (default: `nvds_`) |
| `MYSQL_POOL_SIZE`   | Connection pool size (default: `10`)          |

When any of the above is set, the backend will automatically:

- Create two tables (e.g., `nvds_content` and `nvds_images`) if they do not
  exist.
- Read and write content rows instead of the JSON file.
- Record uploaded image metadata (`slot_id` + relative file path) so `/api/images`
  can be served directly from MySQL.

If the MySQL connection fails at runtime, the server logs the error and falls
back to the JSON/file-based storage to keep the site online.

### API surface

| Method & path           | Description                             |
|-------------------------|-----------------------------------------|
| `GET /api/health`       | Lightweight sanity check.               |
| `GET /api/content`      | Returns `{ content, updatedAt }`.       |
| `PUT /api/content`      | Body: `{ content: { key: value } }`.    |
| `GET /api/images`       | Returns `{ images: { slotId: url } }`.  |
| `POST /api/images/:id`  | `multipart/form-data` with `file`. Saves a single optimized file per slot. |
| `DELETE /api/images/:id`| Removes the stored file for that slot.  |

### Front-end configuration

Both `admin.js` and `script.js` look for the optional globals below before
falling back to the current origin:

```html
<script>
  window.NVDS_API_BASE = 'https://admin.example.org/api';
  window.NVDS_IMAGE_ROOT = 'https://cdn.example.org/uploads';
</script>
```

Set those if you proxy the API somewhere else. Otherwise, running `npm start`
and opening `http://localhost:4000/admin.html` is enough—the admin will read
and write through the backend, and the public pages will render the persisted
content and images automatically.

### Overriding API targets for hosted admin builds

If you open `admin.html` from a static host (GitHub Pages, Netlify, etc.) there
is no backend at that origin, so the helper `admin-config.js` pre-sets
`window.NVDS_API_BASE` for you. By default it points to
`http://localhost:4000/api`, which works when you run the backend locally.

You can override the targets without editing code:

- Append `?api=https://your-admin.example.com/api` to the admin URL to set a new
  API base. This value is stored in `localStorage` so subsequent visits reuse it.
- Optionally set a custom image root with
  `?images=https://cdn.example.com/uploads`.
- Append `?resetConfig=1` to clear the stored overrides.

Once the overrides are set, both the admin panel and the public scripts will use
the supplied backend.

> Tip: Public pages automatically read the same stored configuration (see
> `script.js`) so any API base you set from the admin console is also used when
> rendering `index.html`, `about.html`, etc. Append `?resetConfig=1` to any page
> URL to clear the overrides in your browser.
