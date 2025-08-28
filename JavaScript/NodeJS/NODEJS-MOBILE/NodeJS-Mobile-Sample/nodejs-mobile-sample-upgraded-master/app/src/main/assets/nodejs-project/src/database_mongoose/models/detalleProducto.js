import mongoose from "mongoose";
import ListaCompra from "./listaCompra.js";

const detalleProducto_Schema = mongoose.Schema({
    // barcodeProducto: {type: Number, require: true, unique: true, index: true},
    barcodeProducto: {type: Number},
    descripcionProducto: {type: String},
    fraccionamiento: {type: String},
    historicoPrecios: [
        {
            listaCompra: {type: mongoose.Types.ObjectId, ref: "listaCompra", /* require:true */},
            // fechaCompra: {type: Date, /* default: Date.now */},
            precio: {type: Number, require: true},
            cantidadProducto: {type: Number, require: true},
            _id: false
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

detalleProducto_Schema.virtual("historicoPrecios.fechaCompra", {
    localField: "historicoPrecios[0].listaCompra",
    foreignField: "id",
    ref: "listaCompra",
    justOne: true,
});

detalleProducto_Schema.virtual("historicoPrecios.fechaCompra_", {
    localField: "historicoPrecios[0].listaCompra",
    foreignField: "_id",
    ref: "listaCompra",
    justOne: true,
});

detalleProducto_Schema.method("actualizarValores", function(newDoc) {
    newDoc.descripcionProducto ?? (this.descripcionProducto = newDoc.descripcionProducto);
    newDoc.historicoPrecios ?? (this.historicoPrecios = []);
    newDoc.historicoPrecios.forEach(item => {
        newDoc.fechaPrecio ?? (this.fechaPrecio = newDoc.fechaPrecio);
        newDoc.precio ?? (this.precio = newDoc.precio);
        newDoc.supermercado ?? (this.supermercado = newDoc.supermercado);
    });
})

detalleProducto_Schema.set('toJSON', { virtuals: true });
detalleProducto_Schema.set('toObject', { virtuals: true });

export const DetalleProducto = new mongoose.model("detalleProducto", detalleProducto_Schema);
export default DetalleProducto;