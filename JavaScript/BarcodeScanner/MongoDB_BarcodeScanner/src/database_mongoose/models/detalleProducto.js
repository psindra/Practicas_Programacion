import mongoose from "mongoose";

const detalleProducto_Schema = mongoose.Schema({
    barcodeProducto: {type: Number, require: true, unique: true, index: true},
    descripcionProducto: {type: String},
   /*  historicoPrecios: [
        {
            fechaPrecio: {type: Date, default: new Date(), unique: true},
            precio: {type: Number, require: true},
            supermercado: {type: String, require: false},
            
        }
    ] */
    precio: {type: Number, require: true},
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