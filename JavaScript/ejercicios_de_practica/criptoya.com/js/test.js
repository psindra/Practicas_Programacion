// javascript: (function() {
//     var css = ':root { color-scheme: only light;}';
//     var head = document.getElementsByTagName('head')[0];
//     var style = document.createElement('style');
//     if (!window.lightOnlyCounter) {
//         window.lightOnlyCounter = 1;
//     } else {
//         window.lightOnlyCounter++;
//         if (window.lightOnlyCounter % 2 == 0) {


     
//        var css = ':root { color-scheme: initial;}';
//         }
//     }
//     style.type = 'text/css';
//     if (style.styleSheet) {
//         style.styleSheet.cssText = css;
//     } else {
//         style.appendChild(document.createTextNode(css));
//     }
//     document.head.appendChild(style.cloneNode(true));
//     document.querySelectorAll('iframe').forEach(
//         (frame) => {
//             frame.contentDocument?.head.appendChild(style.cloneNode(true));
//             frame.contentDocument?.querySelectorAll('iframe').forEach(
//                 (frame2) => {
//                     frame2.contentDocument?.head?.appendChild(style.cloneNode(true));
//                 }
//             );
//         }
//     );
// }())



// // javascript: (function() {    var css = ':root { color-scheme: only light;}';    var head = document.getElementsByTagName('head')[0];    var style = document.createElement('style');    if (!window.lightOnlyCounter) {        window.lightOnlyCounter = 1;    } else {        window.lightOnlyCounter++;        if (window.lightOnlyCounter % 2 == 0) {            var css = ':root { color-scheme: initial;}';        }    }    style.type = 'text/css';    if (style.styleSheet) {        style.styleSheet.cssText = css;    } else {        style.appendChild(document.createTextNode(css));    }    head.appendChild(style);}());

// if(!window.lightOnlyCounter) window.lightOnlyCounter = false;
// window.lightOnlyCounter = !window.lightOnlyCounter;
// document.documentElement.style.colorScheme = window.lightOnlyCounter ? "only light" : "initial";
// document.querySelectorAll('iframe').forEach(
//     (frame) => {
//         if (frame.contentDocument){
//             frame.contentDocument.documentElement.style.colorScheme = window.lightOnlyCounter ? "only light" : "initial";
//             frame.contentDocument?.querySelectorAll('iframe').forEach(
//                 (frame2) => {
//                     if (frame2.contentDocument){
//                         frame2.contentDocument.documentElement.style.colorScheme = window.lightOnlyCounter ? "only light" : "initial";
//                     }
//                 }
//             );
//         }
//     }
// );

// let _sortedRows = Array.from(document.querySelector("table").tBodies[0].querySelectorAll("tr")).sort(
//     (a, b) => {
//         console.log(a.querySelector("td:nth-child(3)").textContent[0]);
//         console.log(a.querySelector("td:nth-child(3)").textContent[0] > b.querySelector("td:nth-child(3)").textContent[0]);
//         return a.querySelector("td:nth-child(3)").textContent[0] < b.querySelector("td:nth-child(3)").textContent[0]? 1 : -1;
//     }
// )
// let _tBody = document.createElement("tBody");
// _tBody.append(..._sortedRows)
// document.querySelector("table").replaceChild(_tBody, document.querySelector("table").tBodies[0]);



//     //    //    //    //    //    //    //    //    //    //    //
//     const ordenarTabla = function(tabla, columna){
//         let _sortedRows = Array.from(tabla.tBodies[1].querySelectorAll("tr")).sort(
//             (a, b) => {
//                 console.log(a.querySelector(`td:nth-child(${columna})`).textContent);
//                 console.log(b.querySelector(`td:nth-child(${columna})`).textContent);
//                 console.log(a.querySelector(`td:nth-child(${columna})`).textContent > b.querySelector(`td:nth-child(${columna})`).textContent);
//                 return a.querySelector(`td:nth-child(${columna})`).textContent < b.querySelector(`td:nth-child(${columna})`).textContent? 1 : -1;
//         }
//         )
//         let _tBody = document.createElement("tBody");
//         _tBody.append(..._sortedRows)
//         tabla.replaceChild(_tBody, tabla.tBodies[1]);
//     }
//     ordenarTabla(document.querySelector("table"), 2);
//     //    //    //    //    //    //    //    //    //    //    //

// import fetch from 'node-fetch';
// import fetch from 'node-fetch';

// let brokers = ["argenbtc", "btc", "argenbtc", "belo", "bitex", "bitmonedero", "bitso", "buda", "buenbit", "copter", "criptofacil", "cryptomkt", "decrypto", "domitai", "fiwind", "ftx", "kriptonmarket", "latamex", "lemoncash", "letsbit", "orionx", "pandaexchange", "ripio", "ripioexchange", "satoshitango", "tiendacrypto", "universalcoins", "vibrant", "vitawwallet"]



// brokers.forEach( nombre=> {
//     fetch(`https://criptoya.com/api/${nombre}/dai/ars`).then(resp=> {return resp.json()});
// })

var dai;
const DOM_tBody = document.querySelector("table>tbody");
const _tBody = document.createElement("tbody");
let _choosenOrder = [0, true]

const ordenar = function(rowsArray, columna=_choosenOrder[0], orden=_choosenOrder[1]){
    rowsArray.sort((a,b)=>{
        return a.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent > b.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent? (orden*2-1) : (orden*-2+1);
    })
    // rowsArray[0].childNodes[columna].setAttribute("active", "");
    console.log(...rowsArray);
    DOM_tBody.append(...rowsArray);
    return rowsArray;
}

let _Rows;
fetch("https://criptoya.com/api/dai/ars").then(resp=> {return resp.json()}).then(json=>{/*console.log(json)*/;dai=json}).then(()=>{
    _Rows = Object.entries(dai).map(broker=>{
    console.log(broker[0]);
        
    let _row = document.createElement("tr");
    let _th = document.createElement("th");
    _th = document.createElement("th");
    _th.textContent = broker[0];
    _row.append(_th);

    let _td = document.createElement("td");
    _td = document.createElement("td");
    _td.textContent = broker[1].ask;
    _row.append(_td);
    _td = document.createElement("td");
    _td.innerText = broker[1].totalAsk;
    _row.append(_td);
    _td = document.createElement("td");
    _td.textContent = broker[1].bid;
    _row.append(_td);
    _td = document.createElement("td");
    _td.innerText = broker[1].totalBid;
    _row.append(_td);
    
    return _row;
    })
    
    // _Rows.sort((a,b)=>{
    //     let columna = _choosenOrder[0];
    //     return a.querySelector(`td:nth-child(${columna+1})`).textContent > b.querySelector(`td:nth-child(${columna+1})`).textContent? (_choosenOrder[1]*2-1) : (_choosenOrder[1]*-2+1);
    // })

    ordenar(_Rows);

    // // console.log(dai.buenbit.totalAsk);
    // _row = document.createElement("tr");
    // _td = document.createElement("td");
    // _td.textContent = "buenbit";
    // _row.append(_td);
    // _td = document.createElement("td");
    // _td.textContent = dai.buenbit.ask;
    // _row.append(_td);
    // _td = document.createElement("td");
    // _td.innerText = dai.buenbit.totalAsk;
    // _row.append(_td);
    // _td = document.createElement("td");
    // _td.textContent = dai.buenbit.bid;
    // _row.append(_td);
    // _td = document.createElement("td");
    // _td.innerText = dai.buenbit.totalBid;
    // _row.append(_td);

    // DOM_tBody.append(..._Rows);
})


const _Nombre = document.querySelector("table>thead>tr>th.Nombre");
_Nombre.order = false;
const _ask = document.querySelector("table>thead>tr>th.ask");
_ask.order = false;
const _askTotal = document.querySelector("table>thead>tr>th.askTotal");
_askTotal.order = false;
const _bid = document.querySelector("table>thead>tr>th.bid");
_bid.order = false;
const _bidTotal = document.querySelector("table>thead>tr>th.bidTotal");
_bidTotal.order = false;

_Nombre.addEventListener("click", (ev)=>{
    _Nombre.orden = ! _Nombre.orden;
    ordenar(_Rows,0, _Nombre.orden);

    _ask.removeAttribute("active");
    _askTotal.removeAttribute("active");
    _bid.removeAttribute("active");
    _bidTotal.removeAttribute("active");
    _Nombre.setAttribute("active", _Nombre.orden);
});
_ask.addEventListener("click", (ev)=>{
    _ask.orden = ! _ask.orden;
    ordenar(_Rows,1, _ask.orden);
    if(_ask.orden){ _Rows[0].childNodes[1].setAttribute("active", null);}

    _Nombre.removeAttribute("active");
    _askTotal.removeAttribute("active");
    _bid.removeAttribute("active");
    _bidTotal.removeAttribute("active");
    _ask.setAttribute("active", _ask.orden)
});
_askTotal.addEventListener("click", (ev)=>{
    _askTotal.orden = ! _askTotal.orden;
    ordenar(_Rows,2, _askTotal.orden);
    if(_askTotal.orden){ _Rows[0].childNodes[2].setAttribute("active", null);}

    _Nombre.removeAttribute("active");
    _ask.removeAttribute("active");
    _bid.removeAttribute("active");
    _bidTotal.removeAttribute("active");
    _askTotal.setAttribute("active", _askTotal.orden)
});
_bid.addEventListener("click", (ev)=>{
    _bid.orden = ! _bid.orden;
    ordenar(_Rows,3, _bid.orden);
    if(!_bid.orden){ _Rows[0].childNodes[3].setAttribute("active", null);}

    _Nombre.removeAttribute("active");
    _ask.removeAttribute("active");
    _askTotal.removeAttribute("active");
    _bidTotal.removeAttribute("active");
    _bid.setAttribute("active", _bid.orden)
});
_bidTotal.addEventListener("click", (ev)=>{
    _bidTotal.orden = ! _bidTotal.orden;
    ordenar(_Rows,4, _bidTotal.orden);
    if(!_bidTotal.orden){ _Rows[0].childNodes[4].setAttribute("active", null);}

    _Nombre.removeAttribute("active");
    _ask.removeAttribute("active");
    _askTotal.removeAttribute("active");
    _bid.removeAttribute("active");
    _bidTotal.setAttribute("active", _bidTotal.orden)
});

