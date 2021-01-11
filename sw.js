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
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});