(function configureNvdsAdmin() {
  const STORAGE_KEY = 'nvds_admin_config';
  const params = (() => {
    try {
      return new URLSearchParams(window.location.search || '');
    } catch (_) {
      return new URLSearchParams();
    }
  })();

  if (params.get('resetConfig') === '1') {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }

  const stored = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  })();

  const overrides = {};
  const apiOverride = params.get('api');
  const imageOverride = params.get('images');
  if (apiOverride) overrides.apiBase = apiOverride;
  if (imageOverride) overrides.imageRoot = imageOverride;

  const merged = { ...stored, ...overrides };

  function isHostedWithoutBackend() {
    const { protocol, hostname } = window.location;
    if (protocol === 'file:' || !hostname) return true;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return false;
    const hostedDomains = [
      'github.io',
      'githubusercontent.com',
      'netlify.app',
      'pages.dev',
      'vercel.app',
    ];
    return hostedDomains.some((domain) => hostname.endsWith(domain));
  }

  function guessApiBase() {
    if (merged.apiBase) return merged.apiBase;
    if (isHostedWithoutBackend()) return 'http://localhost:4000/api';
    try {
      const origin = window.location.origin && window.location.origin !== 'null'
        ? window.location.origin
        : 'http://localhost:4000';
      return `${origin.replace(/\/$/, '')}/api`;
    } catch (_) {
      return 'http://localhost:4000/api';
    }
  }

  function guessImageRoot(apiBase) {
    if (merged.imageRoot) return merged.imageRoot;
    if (apiBase.endsWith('/api')) {
      return apiBase.replace(/\/api$/, '/assets/uploads');
    }
    return '';
  }

  const apiBase = guessApiBase();
  const imageRoot = guessImageRoot(apiBase);

  const snapshot = { apiBase, imageRoot };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (_) { /* ignore storage errors */ }

  if (typeof window !== 'undefined') {
    if (!window.NVDS_API_BASE) {
      window.NVDS_API_BASE = apiBase;
    }
    if (!window.NVDS_IMAGE_ROOT && imageRoot) {
      window.NVDS_IMAGE_ROOT = imageRoot;
    }
    window.NVDS_ADMIN_CONFIG = snapshot;
  }
})();
