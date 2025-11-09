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
