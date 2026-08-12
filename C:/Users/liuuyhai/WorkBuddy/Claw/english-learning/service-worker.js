/* 英语小课桌 · 离线缓存 Service Worker */
const CACHE = 'el-pwa-v2';
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
  // stale-while-revalidate：先立刻返回缓存（秒开/离线可用），同时在后台静默拉取最新并刷新缓存
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const network = fetch(req).then((resp) => {
      // 只缓存本站静态资源，并在后台静默刷新 → 下次打开即为最新
      if (resp && resp.status === 200 && (req.url.includes('/assets/') || req.url.endsWith('index.html') || req.url.endsWith('/'))) {
        cache.put(req, resp.clone());
      }
      return resp;
    }).catch(() => cached);
    return cached || network;
  })());
});
