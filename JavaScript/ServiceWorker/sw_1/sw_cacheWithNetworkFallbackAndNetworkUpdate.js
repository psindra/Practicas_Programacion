console.log("ejecución script sw.js");


self.addEventListener("fetch", async(ev) => {
    console.log("evento fetch: ", ev.request.url, new Date().toISOString());
    // debugger
    const respuesta= caches.match(ev.request).then(cache=>{
        
        const respuestaFetch = fetch(ev.request).then(response=>{
            if(response.ok){
                caches.open("cache_dinamico").then(din_cache=>{
                    din_cache.put(ev.request.clone(), response);
                });
                return response.clone();
            }
            return caches.match("404.html").then(cache=>{return cache;})
                .catch(e => { return fetch("404.html") })
        })
            .catch(e => {
                return new Response("<html><body><h1>Falta conexión internet - offline</h1></body></html>", {
                    headers: {
                        "Content-Type": "text/html",
                    }
                });
        });

        if(cache) return cache;
        return respuestaFetch;
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