import express from "express"
const app = express();
/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

import {  } from "./database_mongoose/connection.js";
import listaCompra, { detalleProducto } from "./database_mongoose/models/listaCompra.js";
import mongoose from "mongoose";

// console.log(listaCompra);

app.get("/", (req, res, next,ers) =>{
  res.send("OK");
})

// /* Inicio servidor */
// app.listen(3001, err=>{
//   console.log("listening on PORT: ", app.get("PORT"));
// })

let bar = new detalleProducto({descripcionProducto:"producto1_X", barcodeProducto: 101});
let foo =  new listaCompra();

await (listaCompra.find({ _id: '6482a7014f86c522714f35c3' }).populate("listaProductos.producto")
.then(parentDocs => {
  if (parentDocs.length === 0) {
    throw new Error('Parent document not found');
  }

  const parentDoc = parentDocs[0];

  // Make changes to the producto property of the child documents
  parentDoc.listaProductos.forEach(childDoc => {
    // Modify the desired properties of the producto object
    /* childDoc.producto.descripcionProducto = 'Updated Product Description'; */
    childDoc.producto.descripcionProducto += '  ✅';
    // childDoc.producto.save();
    // You can make other changes as needed
  });

  // Save the parent document with the updated producto properties
  return parentDoc.save();
})
.then(updatedParentDoc => {
  console.log('Parent document updated:', updatedParentDoc);
})
.catch(error => {
  console.error(error);
}));



// await(listaCompra.create({listaProductos: [{producto: new detalleProducto({ descripcionProducto:"producto1_X", barcodeProducto: 101}), cantidad:1, precioCompra: 10.55},
// {producto: new detalleProducto({descripcionProducto:"producto2_X", barcodeProducto: 102}), cantidad:2, precioCompra: 10.55},
// {producto: new detalleProducto({descripcionProducto:"producto3_X", barcodeProducto: 103}), cantidad: 3, precioCompra: 10.55}],
// fechaCompra: "1990-01-01", supermercado: "super1", precioTotal: 1234.56})
// .then(async (...param)=>{
//   console.log({param});
//   console.log(await listaCompra.find());
// }))
// // listaCompra.updateMany({precioTotal: 0.45}, {precioTotal: 111})
// // .then(console.log);

// await(new listaCompra({listaProductos: [{producto: new detalleProducto({ descripcionProducto:"producto1_X", barcodeProducto: 101}), cantidad:1, precioCompra: 10.55},
// {producto: new detalleProducto({descripcionProducto:"producto2_X", barcodeProducto: 102}), cantidad:2, precioCompra: 10.55},
// {producto: new detalleProducto({descripcionProducto:"producto3_X", barcodeProducto: 103}), cantidad: 3, precioCompra: 10.55}],
// fechaCompra: "1990-01-01", supermercado: "super1", precioTotal: 1234.56})
// .then(async (...param)=>{
//   console.log({param});
//   console.log(await listaCompra.find());
// }))

let lista = await listaCompra.find();
let prod = await detalleProducto.find();

console.log({lista});
console.log(lista.listaProductos);
console.log({prod});