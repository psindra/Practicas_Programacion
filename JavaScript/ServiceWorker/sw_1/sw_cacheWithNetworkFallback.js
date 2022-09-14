console.log("ejecución script sw.js");

self.addEventListener("fetch", async(ev) => {
    console.log("evento fetch: ", ev.request.url);
    const cachePromise = caches.match(ev.request).then(cache=>{
        if (cache){
            return cache;
        }
        return fetch(ev.request).then(response=>{
            caches.open("segunda_prueba_cache").then(cache=>{
                cache.put(ev.request, response.clone());
            });
            return response.clone();
        });
    })
    ev.respondWith(cachePromise);
});



self.addEventListener("install", async(ev)=>{
    console.log("evento install"); 
    console.log(ev);
    const cachePromise = caches.open("primer_prueba_cache").then(cache=> {
        return cache.addAll([
            '/',
            'index.html',
            'index.js',
            'style.css',
            'image/running.webp',
            'web3/web3.min.js',
            'web3/web3.min.js.map'
        ])
    })
    ev.waitUntil(cachePromise);
});