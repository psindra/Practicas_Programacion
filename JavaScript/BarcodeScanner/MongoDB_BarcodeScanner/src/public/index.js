import renderError from "./errorRender.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const bodyTabla = document.querySelector("table#listaCompraTable").getElementsByTagName("tbody")[0]

    fetch("/api/listaCompra", {method: "GET", headers:{"Content-Type": "application/json"}})
    .then(async (response) => {
        if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
        return response.json()
    })
    .then(listasCompras=>{
        listasCompras.forEach(listaCompra => {
            const row = document.createElement("tr");
            const listaCompraId = listaCompra._id || listaCompra.id;
            row.id = `row-${listaCompraId}`;

            const fechaCell = document.createElement("td");
            fechaCell.innerText = new Date(listaCompra.fechaCompra).toLocaleDateString();
            row.appendChild(fechaCell);
            
            const supermercadoCell = document.createElement("td");
            supermercadoCell.innerText = listaCompra.supermercado;
            row.appendChild(supermercadoCell);
            
            const precioTotalCell = document.createElement("td");
            precioTotalCell.innerText = listaCompra.precioTotal;
            row.appendChild(precioTotalCell);
            
            const actionsCell = document.createElement("td");
            const editBtn = document.createElement("button");
            editBtn.type = "button";
            editBtn.classList.add("btn", "btn-sm", "btn-primary", "edit-btn",);
            editBtn.dataset.id = listaCompraId;
            editBtn.innerText = "Open/Edit";
            actionsCell.appendChild(editBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn",);
            deleteBtn.dataset.id = listaCompraId;
            deleteBtn.innerText = "Delete";
            actionsCell.appendChild(deleteBtn);
            row.appendChild(actionsCell);
            

            bodyTabla.appendChild(row);
            
        });     // forEach
    })      //then fetch

    const nuevaListaCompraNav = document.querySelector("nav a.nav-link#nuevaListaCompra");
    const nuevaListaCompraDialog = document.getElementById("nuevaListaCompraDialog");
    nuevaListaCompraNav.addEventListener("click", ()=>{
        nuevaListaCompraDialog.showModal();
    })

    const crearNuevaListaCompra = document.querySelector("form#formularioNvaLista button#crearNuevaListaCompra");
    // crearNuevaListaCompra.addEventListener("click", ()=>{
    const formularioNvaLista = document.querySelector("form#formularioNvaLista");
    formularioNvaLista.addEventListener("submit", (ev)=>{
        ev.preventDefault();

        // const formData = Object.fromEntries(new FormData(ev.target));
        // if(!formData.supermercado){
        //     return response.status(400).json({error: "falta nombre de supermercado"});
        // }
        // /* a las fechas enteras (12:00am GMT-3) se le adiciona la dif horaria para mantener el número de día */
        // formData.fechaCompra = new Date(formData?.fechaCompra).getTime() + (formData.fechaCompra ? new Date().getTimezoneOffset()*60000: 0);
        // // /* limpiar cualquier otro dato que venga del formulario por un error del FrontEnd */
        // // formData = { fechaCompra: formData.fechaCompra, supermercado: formData.supermercado};
        // fetch("/api/listaCompra", {
        //     method: "POST", headers:{"Content-Type": "application/json"},
        //     body: JSON.stringify(formData)



        fetch("/api/listaCompra", {
            method: "POST", headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                fechaCompra: new Date(ev.target.fechaCompra.value).getTime() + new Date().getTimezoneOffset()*60000
                || Date.now(),
                supermercado: ev.target.supermercado.value}),
            } 
        )
        .then(async (response) => {
            if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
            return response.json()
        })
        .then(nuevaListaCompra=>{
            console.log(JSON.stringify(nuevaListaCompra));
            location.assign(`./listaDeCompra/index.html?listaCompra=${nuevaListaCompra._id}`);
            ev.target.fechaCompra.value = ev.target.supermercado.value = "";
            ev.target.reset();
        })
        .catch(err=>{
            renderError(err);
        });     //then fetch
    });

    bodyTabla.addEventListener("click", (ev)=>{
        if(ev.target.classList.contains("edit-btn")){
            const rowId = ev.target.dataset.id;
            location.assign(`./listaDeCompra/index.html?listaCompra=${rowId}`);
        } else if(ev.target.classList.contains("delete-btn")){
            const rowId = ev.target.dataset.id;
            // const row = document.getElementById(`row-${rowId}`);
            const row = ev.target.closest(`tr#row-${rowId}`);
            fetch(`/api/listaCompra/${rowId}`, {
                method: "DELETE",
                body: JSON.stringify({ _id: rowId })
            })
            .then(async (response) => {
                if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
                return response.json()
            })
            .then((data) => {
                alert(JSON.stringify({ eliminado: data }));
                row.remove();
            })
            .catch(err=>{
                renderError(err);
            });     //then fetch
        }
    })
})