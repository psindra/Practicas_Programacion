var cotizaciones;
const DOM_table = document.querySelector("table");
// const DOM_tBody = document.querySelector("table>tbody");
const DOM_tBody = DOM_table.tBodies[0];
let _choosenOrder = [2, true]

const cargarDatos = function(){
    let _Rows;
    fetch("https://criptoya.com/api/"+ _coin + "/ars").then(resp=> {return resp.json()}).then(json=>{/*console.log(json);*/cotizaciones=json}).then(async()=>{
        await fetch("https://criptoya.com/api/"+ "binancep2p/" + _coin + "/ars").then(resp=> {return resp.json()}).then(json=>{
            let cotizacionP2P=json;
            cotizaciones.binanceP2P = {totalAsk: cotizacionP2P.asks.data[0].adv.price,
                                       totalBid: cotizacionP2P.bids.data[0].adv.price};
        }).catch(console.log);
        
        /* Object.entries convierte de JSON anidado a vector Array indice-0 para key
        indice-1 para value */
        _Rows = Object.entries(cotizaciones).map(broker=>{
            
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

        DOM_table.tBodies[0].append(..._Rows);
        marcarPuntas();
        ordenar(DOM_table.tBodies[0].rows);
    })
}
cargarDatos();

const actualizarDatos = function(){
    fetch("https://criptoya.com/api/"+ _coin + "/ars").then(resp=> {return resp.json()}).then(json=>{/*console.log(json)*/;cotizaciones=json}).then( async()=>{
        await fetch("https://criptoya.com/api/"+ "binancep2p/" + _coin + "/ars").then(resp=> {return resp.json()}).then(json=>{
            let cotizacionP2P=json;
            cotizaciones.binanceP2P = {totalAsk: cotizacionP2P.asks.data[0].adv.price,
                                       totalBid: cotizacionP2P.bids.data[0].adv.price};
        }).catch(console.log);

        for (const fila of DOM_table.tBodies[0].rows) {
            /* fila.childNodes[0].textContent ➡ es el nombre del exchange "i" */
            fila.childNodes[1].textContent = cotizaciones[fila.childNodes[0].textContent].ask;
            fila.childNodes[2].textContent = cotizaciones[fila.childNodes[0].textContent].totalAsk;
            fila.childNodes[3].textContent = cotizaciones[fila.childNodes[0].textContent].bid;
            fila.childNodes[4].textContent = cotizaciones[fila.childNodes[0].textContent].totalBid;
        }
        
        marcarPuntas();
    ordenar(DOM_table.tBodies[0].rows);
})
}

const ordenar = function(rows, columna=_choosenOrder[0], orden=_choosenOrder[1]){
    let rowsArray = Array.prototype.slice.call(rows);
    rowsArray.sort((a,b)=>{
        return a.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent > b.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent? (orden*2-1) : (orden*-2+1);
    })
    rowsArray[0].parentElement.append(...rowsArray);
    limpiarActive();
    rowsArray[0].parentElement.parentElement["tHead"].querySelector(`th:nth-child(${columna+1})`).setAttribute("active", orden);
}

const marcarPuntas = function(rows=DOM_table.tBodies[0].rows){
    let rowsArray = Array.from(rows);
    rowsArray.forEach(fila=>{
        fila.removeAttribute("active");
    })
    rowsArray.sort((a,b)=>{
        let columna=2, orden=true;
        return a.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent > b.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent? (orden*2-1) : (orden*-2+1);
    })
    rowsArray[0].childNodes[2].setAttribute("active", null);
    rowsArray.sort((a,b)=>{
        let columna=4, orden=false;
        return a.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent > b.querySelector(`th:nth-child(${columna+1}),td:nth-child(${columna+1})`).textContent? (orden*2-1) : (orden*-2+1);
    })
    rowsArray[0].childNodes[4].setAttribute("active", null);
}

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

const limpiarActive = function(){
    _Nombre.removeAttribute("active");
    _ask.removeAttribute("active");
    _askTotal.removeAttribute("active");
    _bid.removeAttribute("active");
    _bidTotal.removeAttribute("active");
}

_Nombre.addEventListener("click", (ev)=>{
    _Nombre.orden = ! _Nombre.orden;
    _choosenOrder = [0, _Nombre.orden]
    ordenar(DOM_table.tBodies[0].rows, _choosenOrder[0], _choosenOrder[1]);

    limpiarActive();
    // _Nombre.setAttribute("active", _Nombre.orden);
});
_ask.addEventListener("click", (ev)=>{
    _ask.orden = ! _ask.orden;
    _choosenOrder = [1, _ask.orden]
    ordenar(DOM_table.tBodies[0].rows, _choosenOrder[0], _choosenOrder[1]);
    // if(_ask.orden){ DOM_table.tBodies[0].rows[0].childNodes[1].setAttribute("active", null);}

    // limpiarActive();
    // _ask.setAttribute("active", _ask.orden);
});
_askTotal.addEventListener("click", (ev)=>{
    _askTotal.orden = ! _askTotal.orden;
    _choosenOrder = [2, _askTotal.orden]
    ordenar(DOM_table.tBodies[0].rows, _choosenOrder[0], _choosenOrder[1]);
    // if(_askTotal.orden){ DOM_table.tBodies[0].rows[0].childNodes[2].setAttribute("active", null);}

    // limpiarActive();
    // _askTotal.setAttribute("active", _askTotal.orden);
});
_bid.addEventListener("click", (ev)=>{
    _bid.orden = ! _bid.orden;
    _choosenOrder = [3, _bid.orden]
    ordenar(DOM_table.tBodies[0].rows, _choosenOrder[0], _choosenOrder[1]);
    // if(!_bid.orden){ DOM_table.tBodies[0].rows[0].childNodes[3].setAttribute("active", null);}

    // limpiarActive();
    // _bid.setAttribute("active", _bid.orden);
});
_bidTotal.addEventListener("click", (ev)=>{
    _bidTotal.orden = ! _bidTotal.orden;
    _choosenOrder = [4, _bidTotal.orden]
    ordenar(DOM_table.tBodies[0].rows, _choosenOrder[0], _choosenOrder[1]);
    // if(!_bidTotal.orden){ DOM_table.tBodies[0].rows[0].childNodes[4].setAttribute("active", null);}

    // limpiarActive();
    // _bidTotal.setAttribute("active", _bidTotal.orden);
});


setInterval(actualizarDatos, 10000);
