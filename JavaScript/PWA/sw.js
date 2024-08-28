console.log("antes de instalar");
self.addEventListener('install', function(e) {
    console.log("cuando se está instalando??");
    e.waitUntil(
        caches.open('v1:static').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './android-chrome-192x192.png',
                './PWA_web.html'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});
self.addEventListener('fetch', function(event) {console.log(event); return fetch(event.request)});
