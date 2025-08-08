const CACHE_NAME = 'dryfruits-cache-v1';
const urlsToCache = [
  '/shop-software/',
  '/shop-software/index.html',
  '/shop-software/manifest.json',
  '/shop-software/icon-192.png',
  '/shop-software/icon-512.png'
  // Add your CSS, JS, and image files here too
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
