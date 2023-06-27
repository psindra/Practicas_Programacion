import express from "express";
import DetalleProducto from "../database_mongoose/models/detalleProducto.js";
const router = express.Router();

router.route("/detalleProducto")
.get((req, res)=>{          /* Consultar toda la BD */
    DetalleProducto.find()
    // .populate("listaProductos.producto")
    .sort("barcodeProducto")
    .then(detalleProductos=>{
        return res.json(detalleProductos);
    })
    .catch(err=>{
        return res.status(400).send(err);
    })
})
.post((req, res)=>{         /* Crear nueva listaCompra */
    delete req.body.id;
    const {id: _, ...newDoc} = {...req.body};
    let newDetalleProducto = new DetalleProducto(newDoc);
    // newDetalleProducto.actualizarValores(req.body);
    newDetalleProducto.save().then(producto=>{
        return res.json(producto);
    })
})


export {router as detalleProductoRoute};
export default router;