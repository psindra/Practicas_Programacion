const express = require("express");
const router = express.Router();

const Nota = require("../database_mongoose/models/notasDiario");
router.use(express.json());
router.use(express.urlencoded());

router.get("/notasDiario", (req, res)=>{
    Nota.find().then(notas=>{
        console.log(notas);
        res.json(notas);
    })
})

router.post("/notasDiario", (req, res) =>{
        console.log("API add Nota -> ", req.body);
    new Nota(req.body).save()
    .then(nota=>{
        console.log("API .then() add Nota -> ",nota)
        res.send(nota)
    })
})


router.get("/notasDiario/:id", async (req, res)=>{
    Nota.findById(req.params.id).then( nota =>{
        console.log(nota);

        if(nota==null){
            return res.status(404).json({error: 'Id not Found'});
        }
        
        return res.json(nota);
    })
    .catch(err=>{
        console.log(err);
        if(err.name == 'CastError'){
            return res.status(400).json({
                error: err
            })
        }
        return res.send(err);
    })
})

router.post("/notasDiario/:id", express.urlencoded({extended: true}), async (req, res)=>{
    Nota.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after'})
    .then( notaActualizada =>{
        console.log({notaActualizada});
        return res.json(notaActualizada);
    })
    .catch(err=>{
        console.log(err);
        return res.status(400).json({
            error: err
        })
    })
})



module.exports = router;