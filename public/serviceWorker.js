const version = '1.0';

const filesToCache = [
    '/',
    '/country/:countryCode',
    'public/index.html',
    'src/App.js'
];

self.addEventListener('install', e => {
    console.log('Attempting to install service worker and cache static assets');
    e.waitUntil(
      caches.open(version)
        .then(cache => {
          return cache.addAll(filesToCache);
        })
    );
  });


  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request)
        .then(response => {
          // Cache hit - return response
          if (response) return response;

          return fetch(e.request);
        }
      )
    );
  });
  
//   self.addEventListener('fetch', e => {
//     console.log('Fetch event for ', e.request.url);
//     e.respondWith(
//       caches.match(e.request)
//       .then(response => {
//         if (response) {
//           console.log('Found ', e.request.url, ' in cache');
//           return response;
//         }
//         console.log('Network request for ', e.request.url);
//         return fetch(e.request)
  
//         // TODO 4 - Add fetched files to the cache
//         .then(response => {
//           // TODO 5 - Respond with custom 404 page
//           return caches.open(version).then(cache => {
//             cache.put(e.request.url, response.clone());
//             return response;
//           });
//         });      
  
//       }).catch(error => {
  
//         // TODO 6 - Respond with custom offline page
  
//       })
//     );
//   });

  self.addEventListener('activate', e => {
    console.log('Activating new service worker...');
  
    const cacheWhitelist = [version];
  
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});