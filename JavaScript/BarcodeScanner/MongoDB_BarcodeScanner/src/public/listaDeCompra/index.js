// import { response } from "express";
// import renderError from "../errorRender.js";
import { playCamera, stopCamera } from "./barcode_script.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const bodyTabla = document.querySelector("table#detalleProductosTable").getElementsByTagName("tbody")[0];
    const listaCompraId = new URLSearchParams(window.location.search).get("listaCompra");
    
    function renderBodyTabla(listaProductos){
        bodyTabla.innerHTML = "";
        listaProductos.forEach(item => {
            const detalleProducto = item.producto;

            /* Saltear todos los productos que devuelva "null" ya sea q se haya eliminado el detalleProducto
                en la Base de Datos */
            if(!detalleProducto){
                return;
            }

            const row = document.createElement("tr");
            const detalleProductoId = detalleProducto._id || detalleProducto.id;
            row.id = `row-${detalleProductoId}`;
    
            const barcodeCell = document.createElement("td");
            barcodeCell.innerText = detalleProducto.barcodeProducto;
            row.appendChild(barcodeCell);
    
            const descripcionCell = document.createElement("td");
            descripcionCell.innerText = detalleProducto.descripcionProducto;
            row.appendChild(descripcionCell);
    
            const cantidadProductoCell = document.createElement("td");
            cantidadProductoCell.innerText = detalleProducto.historicoPrecios[0].cantidadProducto;
            row.appendChild(cantidadProductoCell);
    
            const precioCell = document.createElement("td");
            // precioCell.innerText = detalleProducto.precio;
            precioCell.innerText = detalleProducto.historicoPrecios[0].precio;
            row.appendChild(precioCell);
    
            const actionsCell = document.createElement("td");
            const editBtn = document.createElement("button");
            editBtn.type = "button";
            editBtn.classList.add("btn", "btn-sm", "btn-primary", "edit-btn",);
            editBtn.dataset.id = detalleProductoId;
            editBtn.innerText = "🖊";
            actionsCell.appendChild(editBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn",);
            deleteBtn.dataset.id = detalleProductoId;
            deleteBtn.innerText = "🗑";
            actionsCell.appendChild(deleteBtn);
            row.appendChild(actionsCell);
    
            bodyTabla.appendChild(row);
        });     // forEach

        updateTotal();
    }
    
    function updateTotal() {
        let total = 0;
        const rows = bodyTabla.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const priceCell = rows[i].getElementsByTagName("td")[3]
            const qtyCell = rows[i].getElementsByTagName("td")[2];
            const price = parseFloat(priceCell.innerText) * parseFloat(qtyCell.innerText);
            if (!isNaN(price)) {
                total += price;
            }
        }

        // Update the total value
        const totalElement = document.getElementById("totalSpan");
        totalElement.innerText = total.toFixed(2); // Assuming 2 decimal places
    }
    
    fetch("/api/listaCompra/"+ listaCompraId, {method: "GET", headers:{"Content-Type": "application/json"}})
    .then(async (response) => {
        if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
        return response.json()
    })
    .then(listaCompra => listaCompra.listaProductos)
    .then(renderBodyTabla)
    /* .then(listaProductos=> {
        listaProductos.forEach(item => {
            const detalleProducto = item.producto;
            const row = document.createElement("tr");
            const detalleProductoId = detalleProducto._id || detalleProducto.id;
            row.id = `row-${detalleProductoId}`;

            const barcodeCell = document.createElement("td");
            barcodeCell.innerText = detalleProducto.barcode;
            row.appendChild(barcodeCell);

            const cantidadProductoCell = document.createElement("td");
            cantidadProductoCell.innerText = detalleProducto.cantidadProducto;
            row.appendChild(cantidadProductoCell);

            const precioCell = document.createElement("td");
            // precioCell.innerText = detalleProducto.precio;
            precioCell.innerText = detalleProducto.historicoPrecios[0].precio;
            row.appendChild(precioCell);

            const actionsCell = document.createElement("td");
            const editBtn = document.createElement("button");
            editBtn.type = "button";
            editBtn.classList.add("btn", "btn-sm", "btn-primary", "edit-btn",);
            editBtn.dataset.id = detalleProductoId;
            editBtn.innerText = "🖊";
            actionsCell.appendChild(editBtn);
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn",);
            deleteBtn.dataset.id = detalleProductoId;
            deleteBtn.innerText = "🗑";
            actionsCell.appendChild(deleteBtn);
            row.appendChild(actionsCell);

            bodyTabla.appendChild(row);
        });     // forEach
    })     // then fetch */
    .catch(err=>{
        renderError(err);
        alert(JSON.stringify(err));
    });     // catch fetch

    
    /* Botón Nuevo Producto en Barra Header */
    const nuevoProductoNav = document.querySelector("nav a.nav-link#nuevoProducto");
    const detalleProductoDialog = document.querySelector("dialog#detalleProductoDialog");
    // nuevoProductoNav.addEventListener("click", ()=>{
    //     detalleProductoDialog.showModal();
    // });

    /* Carga de Formulario (por el momento: Nuevo Producto) */
    const formularioDetalleProducto = document.querySelector("dialog form#formDetalleProducto");
    formularioDetalleProducto.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        const formData = Object.fromEntries(new FormData(ev.target));

        if(!formData.barcodeProducto || !formData.cantidadProducto ||
            !formData.precio){
            return response.status(400).json({error: "faltan parámetros"});
        }

        
        /* a las fechas enteras (12:00am GMT-3) se le adiciona la dif horaria para mantener el número de día */
        formData.fechaCompra = new Date(formData?.fechaCompra).getTime() + (formData.fechaCompra ? new Date().getTimezoneOffset()*60000: 0);

        
        /* Pido los detalles de la Lista de Compra */
        fetch("/api/listaCompra/"+ listaCompraId, {method: "GET", headers:{"Content-Type": "application/json"}})
        .then(async (response) => {
            if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
            return response.json()
        })
        .then(async listaCompra => {
            
            // formData.historicoPrecios.findIndex(item=> item.listaCompra == listaCompraId)
            formData.historicoPrecios = [{
                "barcodeProducto": formData.barcodeProducto,
                "descripcionProducto": formData.descripcionProducto,
                "precio": formData.precio,
                "cantidadProducto": formData.cantidadProducto,
                "listaCompra": listaCompraId || listaCompra.id || listaCompra._id,
                "fechaCompra": listaCompra.fechaCompra,
            }]
            /* Creamos el nuevo Producto */
            return fetch("/api/detalleProducto", {
                method: "POST", headers:{"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
                return response.json()
            })
            .then(async nuevoDetalleProducto=>{
                /* Nuevo Producto creado con éxito */
                console.log(JSON.stringify({nuevoDetalleProducto}));
                ev.target.reset();
                detalleProductoDialog.close();
                // // listaCompra.listaProductos = [...bodyTabla].map(tr=> {return {"producto": tr.id.slice('row-'.length)}})
                // if(listaCompra.listaProductos.findIndex(item => { item.producto == nuevoDetalleProducto.id}) != -1){
                //     listaCompra.listaProductos.push({"producto": nuevoDetalleProducto.id})
                // }
                
                return fetch("/api/listaCompra/"+ listaCompraId + "/listaProductos", {
                    method: "POST", headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({"_id": (nuevoDetalleProducto.id || nuevoDetalleProducto._id)})
                    } 
                )
                .then(async (response) => {
                    if(!response.ok){ throw new Error(JSON.stringify(await response.json()));}
                    return response.json()
                })
                .then(nuevaListaCompra => nuevaListaCompra.listaProductos)
                .then(renderBodyTabla)
            })
        })
        .catch(err=>{
            renderError(err);
        }); 
    });


    /* BARCODE SCANNER */

    const scanBtn = document.getElementById("scanBtn");
    const scanDialog = document.getElementById("scanDialog");
    const scanVideo = document.getElementById("scanVideo");
    const closeDialogBtn = document.getElementById("closeDialogBtn");
    scanBtn.addEventListener("click", () => {
        scanDialog.showModal();
        playCamera()
        .then(resultado => {
            document.getElementById("barcodeProducto").value = resultado.barcode;

            if(resultado.detalleProducto){
                if(resultado.detalleProducto._id){
                    document.getElementById("detalleProductoId").value = resultado.detalleProducto._id;
    
                }
                if(resultado.detalleProducto.descripcionProducto){
                    document.getElementById("descripcionProducto").value = resultado.detalleProducto.descripcionProducto;
    
                }
                if(resultado.detalleProducto.historicoPrecios.pop().precio){
                    document.getElementById("precio").value = resultado.detalleProducto.historicoPrecios[0].precio;
    
                }
            }

            console.log(document.getElementById("barcodeProducto").value);
            scanDialog.close();
        })
    });

    closeDialogBtn.addEventListener("click", () => {
        stopCamera()
        scanDialog.close();
    });

    bodyTabla.addEventListener("click",(ev)=>{
        if (ev.target.classList.contains("delete-btn")) {
            const rowId = ev.target.dataset.id;
            const row = ev.target.closest(`tr#row-${rowId}`);
            fetch(`/api/detalleProducto/${rowId}`, {
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


});