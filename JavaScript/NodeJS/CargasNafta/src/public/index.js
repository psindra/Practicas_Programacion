import renderError from "./errorRender.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const bodyTabla = document.querySelector("table#puntoCargaTable").getElementsByTagName("tbody")[0];


    function renderBodyTabla(listaPuntoCarga){
        bodyTabla.innerHTML = "";
        listaPuntoCarga.forEach(puntoCarga => {
            const row = document.createElement("tr");
            const puntoCargaId = puntoCarga._id || puntoCarga.id;
            row.id = `row-${puntoCargaId}`;
    
            const fechaCell = document.createElement("td");
            fechaCell.innerText = new Date(puntoCarga.fecha).toLocaleDateString();
            row.appendChild(fechaCell);
            
            const estacionServicioCell = document.createElement("td");
            estacionServicioCell.innerText = puntoCarga.estacionServicio;
            row.appendChild(estacionServicioCell);
            
            const litrosCargaCell = document.createElement("td");
            litrosCargaCell.innerText = puntoCarga.datosPuntoCarga.litrosCarga;
            row.appendChild(litrosCargaCell);
            
            const precioCell = document.createElement("td");
            precioCell.innerText = puntoCarga.datosPuntoCarga.precio;
            row.appendChild(precioCell);
            
            const kmTripCell = document.createElement("td");
            kmTripCell.innerText = puntoCarga.datosPuntoCarga.kmTrip ?? "-";
            row.appendChild(kmTripCell);
            
            const kmPorLitroREALCell = document.createElement("td");
            kmPorLitroREALCell.innerText = puntoCarga.kmPorLitroREAL ?? "-";
            row.appendChild(kmPorLitroREALCell);
            
            const kilometrajeAutoCell = document.createElement("td");
            kilometrajeAutoCell.innerText = puntoCarga.datosPuntoCarga.kilometrajeAuto ?? "-";
            row.appendChild(kilometrajeAutoCell);

            const actionsCell = document.createElement("td");
            const editBtn = document.createElement("button");
            editBtn.type = "button";
            editBtn.classList.add("btn", "btn-sm", "btn-primary", "edit-btn",);
            editBtn.dataset.id = puntoCargaId;
            editBtn.innerText = "🖊";
            actionsCell.appendChild(editBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn",);
            deleteBtn.dataset.id = puntoCargaId;
            deleteBtn.innerText = "🗑";
            actionsCell.appendChild(deleteBtn);
            row.appendChild(actionsCell);

            bodyTabla.appendChild(row);
        });     // forEach
    }     // renderBodyTabla

    function updateBodyTabla(){
        fetch("/api/puntoCarga", {method: "GET", headers:{"Content-Type": "application/json"}})
        .then(async response => {
            if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
            return response.json()
        })
        .then(listaPuntoCarga => listaPuntoCarga)
        .then(renderBodyTabla)
        .catch(err=>{
            renderError(err);
            alert(JSON.stringify(err));
        });     // catch fetch
    }

    /* Botón Nuevo Punto Carga en Barra Header */
    const nuevoPuntoCargaNav = document.querySelector("nav a.nav-link#nuevoPuntoCarga");
    const puntoCargaDialog = document.querySelector("dialog#puntoCargaDialog");
    // nuevoPuntoCargaNav.addEventListener("click", ()=>{
    //     puntoCargaDialog.showModal();
    // });


    /* Carga de Formulario (por el momento: Nuevo Producto) */
    const formularioPuntoCarga = document.querySelector("dialog form#formPuntoCarga");
    formularioPuntoCarga.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        const formData = Object.fromEntries(new FormData(ev.target));
        
        if(/* !formData.estacionServicio || */ !formData.litrosCarga ||
            !formData.precio){
                return new Error("faltan parámetros");
                return response.status(400).json({error: "faltan parámetros"});
            }
            
            
        /* a las fechas enteras (12:00am GMT-3) se le adiciona la dif horaria para mantener el número de día */
        formData.fecha = new Date(formData?.fecha).getTime() + (formData.fecha ? new Date().getTimezoneOffset()*60000: 0);
        
        const {fecha: _, estacionServicio: __, ...datosPuntoCarga} = formData;
        formData.datosPuntoCarga = datosPuntoCarga;
        
        console.log({formData});

        // return fetch("/api/puntoCarga" + (formData.puntoCargaId != "" ? formData.puntoCargaId : "") , {
        return fetch("/api/puntoCarga" + (formData.puntoCargaId ?? "") , {
            method: "POST", headers:{"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(async (response) => {
            if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
            return response.json()
        })
        .then(nuevoPuntoCarga=>{
            console.log(JSON.stringify({nuevoPuntoCarga}));
            ev.target.reset();
            puntoCargaDialog.close();
            updateBodyTabla();
        })     // fetch
    })

    bodyTabla.addEventListener("click", (ev)=>{
        if(ev.target.classList.contains("edit-btn")){
            // const rowId = ev.target.dataset.id;
            // location.assign(`./listaDeCompra/index.html?listaCompra=${rowId}`);
        } else if(ev.target.classList.contains("delete-btn")){
            const rowId = ev.target.dataset.id;
            // const row = document.getElementById(`row-${rowId}`);
            const row = ev.target.closest(`tr#row-${rowId}`);
            if(!confirm("Eliminar??" )){
                return;
            }
            fetch(`/api/puntoCarga/${rowId}`, {
                method: "DELETE",
                body: JSON.stringify({ _id: rowId })
            })
            .then(async (response) => {
                if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
                return response.json()
            })
            .then((data) => {
                alert(JSON.stringify({ eliminado: data }, null, 2));
                row.remove();
            })
            .catch(err=>{
                renderError(err);
            });     //then fetch
        }
    })

    updateBodyTabla();

})     // DOMContentLoaded