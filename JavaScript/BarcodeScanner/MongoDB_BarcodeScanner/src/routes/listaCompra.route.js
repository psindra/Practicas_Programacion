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
    const newListaCompra = new ListaCompra();
    newListaCompra = req.body;
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
            return res.status(404).json({error: 'Id not Found'});
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
    ListaCompra.findById(req.params["id"])
    .populate("listaProductos.producto")
    .then(lista=>{
        if(lista==null){
            return res.status(404).json({error: 'Id not Found'});
        }

        lista = new ListaCompra(req.body);
        // lista.validate();
        lista.save().then(lista=>{
            return res.json(lista);
        })
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


export {router as listaCompraRoute};
export default router;