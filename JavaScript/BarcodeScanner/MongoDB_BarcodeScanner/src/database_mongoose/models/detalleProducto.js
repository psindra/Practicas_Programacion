import mongoose from "mongoose";

const detalleProducto_Schema = mongoose.Schema({
    barcodeProducto: {type: Number, require: true, unique: true, index: true},
    descripcionProducto: {type: String},
    /* historicoPrecios: [
        {
            fechaPrecio: {type: Date, default: new Date(), unique: true},
            precio: {type: Number, require: true},
            supermercado: {type: String, require: true},
            
        }
    ] */
})

export const detalleProducto = new mongoose.model("detalleProducto", detalleProducto_Schema);
export default detalleProducto;