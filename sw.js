const CACHE_NAME = "404";
const OFFLINE_URL = "404.html";

/* eslint no-restricted-globals:0 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.add(OFFLINE_URL);
    })
  );
});

/* eslint no-restricted-globals:0 */
self.addEventListener('activate', event => {
});

/* eslint no-restricted-globals:0 */
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
