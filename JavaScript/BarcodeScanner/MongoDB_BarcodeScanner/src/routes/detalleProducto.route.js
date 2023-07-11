import express from "express";
import DetalleProducto from "../database_mongoose/models/detalleProducto.js";
const router = express.Router();

router.route("/detalleProducto")
    .get((req, res) => {          /* Consultar toda la BD */
        DetalleProducto.find()
            .then(detalleProductos => {
                return res.json(detalleProductos);
            })
            .catch(err => {
                return res.status(400).send(err);
            })
    })
    .post((req, res) => {         /* Crear nueva listaCompra */
        // delete req.body.id;
        const { id: _, ...newDoc } = { ...req.body };
        let newDetalleProducto = new DetalleProducto(newDoc);
        // newDetalleProducto.actualizarValores(req.body);
        newDetalleProducto.save().then(producto => {
            return res.json(producto);
        })
    })


router.route("/detalleProducto/:id")
    .get((req, res) => {          /* Consultar por UN producto */
        DetalleProducto.findById(req.params["id"])
            .then(detalleProducto => {
                if(detalleProducto==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json(detalleProducto);
            })
            .catch(err => {
                return res.status(400).send(err);
            })
    })
    .post((req, res) => {         /* Editar nueva listaCompra existente */
    console.log(req.body);
        const { id: _, ...editDoc } = { ...req.body };
        DetalleProducto.findByIdAndUpdate(req.params["id"], editDoc, {new: true})
            .then(detalleProducto => {
                if(detalleProducto==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json(detalleProducto);
            })
            .catch(err => {
                return res.status(400).send(err);
            })
    })
    .delete((req, res) => {         /* Eliminar una listaCompra */
        DetalleProducto.findByIdAndDelete(req.params["id"])
            .then(detalleProducto => {
                if(detalleProducto==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json({deleted: detalleProducto});
            })
            .catch(err => {
                return res.status(400).send(err);
            })
    })


export { router as detalleProductoRoute };
export default router;