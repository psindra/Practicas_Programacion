import express from "express";
import PuntoCarga from "../database_mongoose/models/puntoCarga.js";
const router = express.Router();

router.route("/puntoCarga")
    .get((req,res)=>{
        PuntoCarga.find()
            .sort("fecha")
            .exec()
            .then(puntosCarga=>{
                return res.json(puntosCarga);
            })
            .catch(err=>{
                console.log({err});
                return res.status(400).json(err);
            })
    })
    .post((req, res)=>{
        const { _id, id, ...newDoc} = {...req.body};
        console.debug({"req_body":req.body});
        console.debug({newDoc});
        PuntoCarga.create(newDoc)
        .then(puntoCarga=>{
            return res.json(puntoCarga);
        })
        .catch(err=>{
            console.log({err});
            return res.status(400).json(err);
        })
    })

router.route("/puntoCarga/:id")
    .get((req, res)=>{
        if (req.body._id && req.body._id != req.params["id"]){
            return res.status(400).json({error: "los id de url y body NO coinciden"})
        }
        
        PuntoCarga.findById(req.params["id"])
            .exec()
            .then(puntoCarga=>{
                if(puntoCarga==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json(puntoCarga);
            })
            .catch(err=>{
                console.log({err});
                return res.status(400).json(err);
            });
    })
    .post((req, res)=>{
        if (req.body._id && req.body._id != req.params["id"]){
            return res.status(400).json({error: "los id de url y body NO coinciden"})
        }
        
        const { _id, id, fecha, ...newDoc} = {...req.body};
        PuntoCarga.findByIdAndUpdate(req.params["id"], newDoc, {new: true})
            .exec()
            .then(puntoCargaEditado=>{
                if(puntoCargaEditado==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json(puntoCargaEditado);
            })
            .catch(err=>{
                console.log({err});
                return res.status(400).json(err);
            })
    })
    .delete((req, res)=>{
        if (req.body._id && req.body._id != req.params["id"]){
            return res.status(400).json({error: "los id de url y body NO coinciden"})
        }
        PuntoCarga.findByIdAndDelete(req.params["id"])
            .exec()
            .then(puntoCargaEliminado=>{
                if(puntoCargaEliminado==null){
                    return res.status(404).json({error: 'Id not Found'});
                }
                return res.json({deleted: puntoCargaEliminado});
            })
            .catch(err=>{
                return res.status(400).send(err);
            })
    })


export {router as puntoCargaRoute};
export default router;