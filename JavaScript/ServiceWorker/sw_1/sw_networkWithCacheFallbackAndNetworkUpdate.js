console.log("ejecución script sw.js");


self.addEventListener("fetch", async(ev) => {
    console.log("evento fetch: ", ev.request.url, new Date().toISOString());
    const respuesta = fetch(ev.request).then(response=>{
        if(response.ok) {
            caches.match(ev.request).then(cache=>{
                if(!cache){
                    caches.open("cache_dinamico").then(din_cache=>{
                        din_cache.put(ev.request, response.clone());
                    })
                }
            })
            return response.clone();
        }
        return fetch('404.html');
    })
    .catch(error=>{
        return caches.match(ev.request).then(cache=>{
            if(cache) return cache;
            return new Response("<html><body><h1>Falta conexión internet - offline</h1></body></html>",{
                headers:{
                    "Content-Type": "text/html",
                }
            });
        })
    })
    ev.respondWith(respuesta);
});


self.addEventListener("activate", async(ev)=>{
    console.log("evento activate"); 
    console.log(ev);
    const cachePromise = caches.open("primer_prueba_cache").then(cache=> {
        return cache.addAll([
            '/',
            'index.html',
            'index.js',
            'style.css',
            'image/running.webp',
            'web3/web3.min.js',
            'web3/web3.min.js.map',
            '404.html'
        ])
    })
    ev.waitUntil(cachePromise);
});