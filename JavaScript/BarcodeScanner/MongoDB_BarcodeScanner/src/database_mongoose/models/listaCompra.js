import mongoose from "mongoose";
import detalleProducto from "./detalleProducto.js";

/* se puede integrar un esquema dentro de otro esquema. Predeterminadamente Mongoose va a
    agregarle un Id (esto se puede configurar) teniendo en cuenta que es el Esquema
    lo que se integra y NO el modelo, por lo cual por lo que entiendo no se estaría guardando
    el (sub)modelo en su Documento correspondiente */

const listaCompra_Schema = new mongoose.Schema({
    fechaCompra: {type: Date},
    supermercado: {type: String},
    listaProductos: [
        {
            producto: {type: mongoose.Types.ObjectId, ref: detalleProducto, require:true},
            // producto: detalleProducto,
            cantidad: {type: Number, require:true},
            precioCompra: {type: Number, require:true},
            checked: {type: Boolean},
            _id: false,
        // producto: {type: mongoose.Schema.ObjectId, required: true, unique: true},
        }
    ],
    precioTotal: {type: Number}
})

listaCompra_Schema.pre(["save", /^update/, /.*Update.*?/], function(next){
    this.listaProductos.forEach(item =>{
        if(item.producto instanceof mongoose.model("detalleProducto")){
            item.producto.save();
        }
    })
    next();
})



export {DetalleProducto as DetalleProducto};
export const ListaCompra = mongoose.model("listaCompra", listaCompra_Schema);
export default ListaCompra;