const CACHE_NAME = 'conversor-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css', // Si tienes un archivo CSS externo
  // Agrega aquí otras URLs que quieras cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});