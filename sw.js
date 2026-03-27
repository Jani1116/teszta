const CACHE_NAME = 'teszta-v4';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Mindig a hálózatról próbálja, ha nincs net, akkor a cache-ből
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
