const express = require("express");
const router = express.Router();
const Nota = require("../database_mongoose/models/notasDiario");


router.get("/notas", (req, res)=>{
    Nota.find()
    .sort("-date")
    .then(notas => {
        // console.log("Notas.find().sort() -> ", notas);
        return res.render("list-notes", {notes: notas})
    })
})

router.get("/form-add-nota", (req, res)=>{
    res.render("add-edit-note")
})

router.get("/form-edit-nota/:id", (req, res)=>{
    Nota.findById(req.params.id)
    .then(nota => {
        if(!nota){
            throw ("Id de Nota no existe");
        }
        res.render("add-edit-note", {edit: true, note: nota})
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })
})

router.get("/form-delete-nota/:id", (req, res)=>{
    Nota.findById(req.params.id)
    .then(nota => {
        if(!nota){
            throw ("Id de Nota no existe");
        }
        return res.render("delete-note", {edit: true, note: nota})
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })
})

router.post("/cmd-add-edit-nota", (req,res)=>{
    console.log("add Nota -> ", req.body);
    new Nota(req.body).save()
    .then(nota=>{
        console.log(".then() add Nota -> ",nota)
        return res.redirect("./notas");
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })
})

router.post("/cmd-add-edit-nota/:id", (req,res)=>{
    Nota.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after'})
    .then( notaActualizada =>{
        console.log({notaActualizada});
        return res.redirect("../notas");
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })

})

router.post("/cmd-delete-nota/:id", (req,res)=>{
    Nota.findByIdAndDelete(req.params.id)
    .then( notaEliminada =>{
        console.log({notaEliminada});
        return res.redirect("../notas");
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })

})

module.exports = router;