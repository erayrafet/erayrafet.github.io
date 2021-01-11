const CACHE_NAME = "404";
const OFFLINE_URL = "404.html";

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.add(OFFLINE_URL);
    })
  );
});

self.addEventListener('activate', event => {
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});
