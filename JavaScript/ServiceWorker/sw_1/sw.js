console.log("instalado");

// console.log(navigator.userAgent + '\n')

// fetch("https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.1-rc.0/web3.min.js", {mode: "no-cors"}).then(async(arg)=>{
//     // console.log(arg.text());
//     arg.text().then(resp=>{
//         console.log(resp);
//     });
// })

self.addEventListener("fetch", ev => {
    console.log(ev);
    if(ev.request.url.includes("web3.min.js")){
        return ev.respondWith(fetch("https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.1-rc.0/web3.min.js", {mode: "no-cors", headers:{
            contentType: "text/html"
        }}));
    }
    ev.respondWith(fetch(ev.request));
})