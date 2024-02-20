import express, { Router } from "express";
const router = express.Router();
import ListaCompra from "../database_mongoose/models/listaCompra.js";

router.route("/listaCompra")
.get((req, res)=>{          /* Consultar toda la BD */
    ListaCompra.find()
    .populate("listaProductos.producto")
    .sort("-fechaCompra")
    .then(listaCompras=>{
        return res.json(listaCompras);
    })
    .catch(err=>{
        return res.status(400).send(err);
    })
})
.post((req, res)=>{         /* Crear nueva listaCompra */
    const newListaCompra = new ListaCompra(req.body);
    // newListaCompra = req.body;
    newListaCompra.save().then(lista=>{
        return res.json(lista);
    })
})

router.route("/listaCompra/:id")
.get((req, res)=>{          /* Consultar por UNA listaCompra */
    ListaCompra.findById(req.params["id"])
    .populate("listaProductos.producto")
    .then(lista=>{
        if(lista==null){
            return res.status(404).json({error: 'GET: Id not Found'});
        }
        
        return res.json(lista);
    })
    .catch(err=>{
        console.log(err);
        if(err.name == 'CastError'){
            return res.status(400).json({
                error: err
            })
        }
        return res.json(err);
    })
})
.post((req, res)=>{         /* Editar una listaCompra */
    const { id: _, ...editDoc } = { ...req.body };
    ListaCompra.findByIdAndUpdate(req.params["id"], editDoc, {new: true})
    .then(lista=>{
        if(lista==null){
            return res.status(404).json({error: 'POST: Id not Found'});
        }
        return res.json(lista);


 /*    ListaCompra.findById(req.params["id"])
    .populate("listaProductos.producto")
    .then(lista=>{
        if(lista==null){
            return res.status(404).json({error: 'POST: Id not Found'});
        }

        const newList = new ListaCompra(req.body);
        if (lista.id === newList.id) {
            ListaCompra.replaceOne({_id: newList.id}, newList)
            .then(lista=>{
                return res.json(lista);
            })
        }) */

    })
    .catch(err=>{
        console.log(err);
        if(err.name == 'CastError'){
            return res.status(400).json({
                error: err
            })
        }
        return res.json(err);
    })
})
.delete((req, res) => {         /* Eliminar una listaCompra */
    ListaCompra.findByIdAndDelete(req.params["id"])
        .then(listaCompra => {
            if(listaCompra==null){
                return res.status(404).json({error: 'DELETE: Id not Found'});
            }
            return res.json({deleted: listaCompra});
        })
        .catch(err => {
            return res.status(400).send(err);
        })
})

router.route("/listaCompra/:id/listaProductos")
.post((req, res)=>{         /* Editar un producto de una listaCompra */
    ListaCompra.findById(req.params["id"])
    // .populate("listaProductos.producto")
    .then(listaCompra=>{
        if(listaCompra==null){
            return res.status(404).json({error: 'POST: Id not Found'});
        }
        if(listaCompra.listaProductos.findIndex(producto=> producto._id == req.body["_id"]) != -1){
            return res.status(404).json({error: 'POST: el Producto ya existe en esta lista'});
        }
        
        listaCompra.listaProductos.push({producto: req.body["_id"]});
        listaCompra.save()
        .then(listaCompraSaved=>{
            return ListaCompra.populate(listaCompraSaved, { path: 'listaProductos.producto' })
            .then(listaCompraSavedPopulated => {
                return res.json(listaCompraSaved);
            })
        })
        .catch(err=>{
            return res.status(500).json(err);
        });
    });
})
.delete((req, res)=>{         /* Eliminar un producto de una listaCompra */
    ListaCompra.findById(req.params["id"])
    // .populate("listaProductos.producto")
    .then(listaCompra=>{
        if(listaCompra==null){
            return res.status(404).json({error: 'POST: Id not Found'});
        }
        if(listaCompra.listaProductos.findIndex(producto=> producto._id = req.body["_id"]) == -1){
            return res.status(404).json({error: 'POST: el Producto NO existe en esta lista'});
        }
        
        listaCompra.push({producto: req.body["_id"]});
        listaCompra.save(listaCompraSaved=>{
            return res.json(listaCompraSaved);
        })
        .catch(err=>{
            return res.status(500).json(err);
        });
    });
})

export {router as listaCompraRoute};
export default router;