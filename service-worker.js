/* 英语小课桌 · 离线缓存 Service Worker */
const CACHE = 'el-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './assets/data.js',
  './assets/app.js',
  './assets/style.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((resp) => {
          // 只缓存本站静态资源
          if (resp && resp.status === 200 && (req.url.includes('/assets/') || req.url.endsWith('index.html') || req.url.endsWith('/'))) {
            const cp = resp.clone();
            caches.open(CACHE).then((c) => c.put(req, cp));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
