document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const rowIdInput = document.getElementById("rowId");
    const barcodeInput = document.getElementById("barcodeProducto");
    const descriptionInput = document.getElementById("descripcionProducto");
    const cantidadInput = document.getElementById("cantidad");
    const priceInput = document.getElementById("precio");
    const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const cancelBtn = document.getElementById("cancelBtn");

    let editingRowId = null;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const barcode = barcodeInput.value;
        const description = descriptionInput.value;
        const cantidad = cantidadInput.value;
        const price = priceInput.value;

        const formData = {
            barcodeProducto: Number(barcode),
            descripcionProducto: description,
            historicoPrecios: [{ precio: Number(price), cantidad: Number(cantidad) }],
        };

        if (editingRowId) {
            // Update existing row
            const existingRow = document.getElementById(`row-${editingRowId}`);
            existingRow.innerHTML = `
                <td>${barcode}</td>
                <td>${description}</td>
                <td>${cantidad}</td>
                <td>${price}</td>
                <td>
                <button type="button" class="btn btn-sm btn-primary edit-btn" data-id="${editingRowId}">Edit</button>
                <button type="button" class="btn btn-sm btn-danger delete-btn" data-id="${editingRowId}">Delete</button>
                </td>
            `;

            formData["_id"] = editingRowId;

            fetch(`/api/detalleProducto/${editingRowId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            // Clear the form fields and editing state
            cancelEditing();
        } else {

            fetch("/api/detalleProducto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then((response) => response.json())
                .then((data) => {
                    const rowId = data._id; // Assuming the JSON response has an 'id' property
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${data.barcodeProducto}</td>
                        <td>${data.descripcionProducto}</td>
                        <td>${data.historicoPrecios[0].cantidad}</td>
                        <td>${data.historicoPrecios[0].precio}</td>
                        <td>
                        <button type="button" class="btn btn-sm btn-primary edit-btn" data-id="${rowId}">Edit</button>
                        <button type="button" class="btn btn-sm btn-danger delete-btn" data-id="${rowId}">Delete</button>
                        </td>
                    `;
                    row.id = `row-${rowId}`;
                    dataTable.appendChild(row);

                    // Clear the form fields
                    barcodeInput.value = "";
                    descriptionInput.value = "";
                    priceInput.value = "";
                    updateTotal();

                })
                .catch(() => {
                    alert("Error submitting the form");
                });
        }

        updateTotal();
    });

    cancelBtn.addEventListener("click", () => {
        cancelEditing();
    });

    dataTable.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("edit-btn")) {
            const rowId = target.getAttribute("data-id");
            const row = document.getElementById(`row-${rowId}`);
            const barcode = row.cells[0].innerText;
            const description = row.cells[1].innerText;
            const cantidad = row.cells[2].innerText;
            const price = row.cells[3].innerText;

            // Set the form fields with the selected row's data
            rowIdInput.value = rowId;
            barcodeInput.value = barcode;
            descriptionInput.value = description;
            cantidadInput.value = cantidad;
            priceInput.value = price;

            // Set the editing state
            editingRowId = rowId;
        } else if (target.classList.contains("delete-btn")) {
            const rowId = target.getAttribute("data-id");
            const row = document.getElementById(`row-${rowId}`);

            fetch(`/api/detalleProducto/${rowId}`, {
                method: "DELETE",
                body: JSON.stringify({ _id: rowId })
            })
                .then((response) => response.json())
                .then((data) => {
                    alert(JSON.stringify({ eliminado: data }));
                    row.remove();
                });
        }

        updateTotal();
    });

    function cancelEditing() {
        editingRowId = null;
        rowIdInput.value = "";
        barcodeInput.value = "";
        descriptionInput.value = "";
        cantidadInput.value = "";
        priceInput.value = "";
    }

    fetch("/api/detalleProducto", {
        method: "GET",

        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((datas) => {
            datas.forEach(data => {
                const rowId = data._id; // Assuming the JSON response has an 'id' property
                const row = document.createElement("tr");
                row.innerHTML = `
        <td>${data.barcodeProducto}</td>
        <td>${data.descripcionProducto}</td>
        <td>${data.historicoPrecios[0].cantidad}</td>
        <td>${data.historicoPrecios[0].precio}</td>
        <td>
          <button type="button" class="btn btn-sm btn-primary edit-btn" data-id="${rowId}">Edit</button>
          <button type="button" class="btn btn-sm btn-danger delete-btn" data-id="${rowId}">Delete</button>
        </td>
      `;
                row.id = `row-${rowId}`;
                dataTable.appendChild(row);
            });

            // Clear the form fields
            barcodeInput.value = "";
            descriptionInput.value = "";
            priceInput.value = "";

            updateTotal();
        })
        .catch((err) => {
            // alert("Error getting API REST and submitting the form");
            alert(JSON.stringify(err))
            alert((err))
            console.error(err);
            
        })


    function updateTotal() {
        let total = 0;
        const rows = dataTable.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const priceCell = rows[i].getElementsByTagName("td")[3]
            const qtyCell = rows[i].getElementsByTagName("td")[2];
            const price = parseFloat(priceCell.innerText) * parseFloat(qtyCell.innerText);
            if (!isNaN(price)) {
                total += price;
            }
        }

        // Update the total value
        const totalElement = document.getElementById("total");
        totalElement.innerText = total.toFixed(2); // Assuming 2 decimal places
    }


    const scanBtn = document.getElementById("scanBtn");
    const scanDialog = document.getElementById("scanDialog");
    const scanVideo = document.getElementById("scanVideo");
    const closeDialogBtn = document.getElementById("closeDialogBtn");
    scanBtn.addEventListener("click", () => {
        scanDialog.showModal();
        playCamera();
    });

    closeDialogBtn.addEventListener("click", () => {
        stopCamera()
        scanDialog.close();
    });



    updateTotal();

});