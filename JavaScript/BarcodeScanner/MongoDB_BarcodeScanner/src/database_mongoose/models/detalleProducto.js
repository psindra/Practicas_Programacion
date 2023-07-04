import mongoose from "mongoose";
import ListaCompra from "./listaCompra.js";

const detalleProducto_Schema = mongoose.Schema({
    // barcodeProducto: {type: Number, require: true, unique: true, index: true},
    barcodeProducto: {type: Number},
    descripcionProducto: {type: String},
    historicoPrecios: [
        {
            listaCompra: {type: mongoose.Types.ObjectId, ref: "listaCompra", /* require:true */},
            fechaPrecio: {type: Date, default: Date.now},
            fraccionamiento: {type: String},
            precio: {type: Number, require: true},
            cantidad: {type: Number, require: true},
        }
    ],
   /*  historicoPrecios: [
        {
            fechaPrecio: {type: Date, default: new Date(), unique: true},
            precio: {type: Number, require: true},
            supermercado: {type: String, require: false},
            
        }
    ] */
    precio: {type: Number},
})

detalleProducto_Schema.method("actualizarValores", function(newDoc) {
    newDoc.descripcionProducto ?? (this.descripcionProducto = newDoc.descripcionProducto);
    newDoc.historicoPrecios ?? (this.historicoPrecios = []);
    newDoc.historicoPrecios.forEach(item => {
        newDoc.fechaPrecio ?? (this.fechaPrecio = newDoc.fechaPrecio);
        newDoc.precio ?? (this.precio = newDoc.precio);
        newDoc.supermercado ?? (this.supermercado = newDoc.supermercado);
    });
})

export const DetalleProducto = new mongoose.model("detalleProducto", detalleProducto_Schema);
export default DetalleProducto;