const portfolioPath = "api/v2/portafolio/";
const tablaEstadoCartera = document.querySelector("table#tablaEstadoCartera");
const tbodyEstadoCartera = document.querySelector("table#tablaEstadoCartera tbody");


async function portfolioFetch() {
    return cookieStore.get("auth-token").then(async cookie => {
        if(!cookie){
             await reAUTH();
             return cookieStore.get("auth-token");
        }
        return cookie;        
    })
    .then(cookie => {
        const token = cookie.value;
        return fetch(apiHost + portfolioPath, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            mode: "cors",
            redirect: "follow",
        });
    })
    .then(response => {
        if(response.status === 401) throw new Error(`Token expirado o error de autenticación.\n ${await (response.text())}`);
        if(!response.ok) throw new Error(`Error con la petición REST:<br> ${response.status}<br> ${response.statusText}`);
        return response.json();
    })
    .catch(async err => {
        mensajeModal("Error fetching portfolio", `${err.message}`);
    });
}

class tablaPortfolio {
    constructor(tablaEstadoCartera) {
        this.table = tablaEstadoCartera;
        this.cargarDatos();
    }
    cargarDatos() {

        portfolioFetch()
        .then(this.estilarDatosPortfolio)
        // .then(portfolio => this.estilarDatosPortfolio(portfolio))
        .then(portfolio => {
            this.table.tBodies[0].innerHTML = ""; // Limpiar contenido previo
            return portfolio.activos;
        })
        .then(activos => {
            const headerRow = document.createElement("tr");
            for (const key of listadoColumnas) {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
            }
            this.table.tHead.innerHTML = ""; // Limpiar encabezado previo
            this.table.tHead.appendChild(headerRow);
            return activos;
        })
        .then(activos => {
            for (const activo of activos) {
                const row = document.createElement("tr");
                for (const key of listadoColumnas){
                    const td = document.createElement("td");
                    const keys = key.split(".");
                    let value = activo;
                    for(const k of keys){
                        value = value[k];
                    }
                    td.textContent = value;
                    row.appendChild(td);
                }
                this.table.tBodies[0].appendChild(row);
            }
        })
    }   // final cargarDatos

    estilarDatosPortfolio(portfolio) {
        for (const activo of portfolio.activos) {
            activo.variacionDiaria = activo.variacionDiaria.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2, style: "unit", unit: "percent" });
            activo.gananciaPorcentaje = activo.gananciaPorcentaje.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2, style: "unit", unit: "percent" });
        }
        return portfolio;
    } // final estilarDatosPortfolio
}; // final estadoCartera


const listadoColumnas = ["titulo.simbolo", "titulo.descripcion", "variacionDiaria", "gananciaPorcentaje"];
const estadoCartera = new tablaPortfolio(tablaEstadoCartera);



// tbodyEstadoCartera.cargarDatos = async function() {
//     portfolioFetch().then(portfolio => {
//         this.innerHTML = ""; // Limpiar contenido previo
//         return portfolio.activos;
//     }).then(activos => {
//         const headerRow = document.createElement("tr");
//         for (const key in activos[0]) {
//             const th = document.createElement("th");
//             th.textContent = key;
//             headerRow.appendChild(th);
//         }
//         this.appendChild(headerRow);
//         return activos;
//     })
//     .then(activos => {
//         for (const activo of activos) {
//             const row = document.createElement("tr");
//             for (const key in activo) {
//                 const td = document.createElement("td");
//                 td.textContent = JSON.stringify(activo[key]);
//                 row.appendChild(td);
//             }
//             this.appendChild(row);
//         }

//     });
// }


// portfolioFetch().then(data => tbodyEstadoCartera.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).textContent = JSON.stringify(data));