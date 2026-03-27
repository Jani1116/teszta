self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Üres fetch handler, hogy telepíthető legyen PWA-ként
});
