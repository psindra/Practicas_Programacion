const express = require("express");
const router = express.Router();

const Nota = require("../database_mongoose/models/notasDiario");
router.use(express.json());
router.use(express.urlencoded({extended: true}));


router.route("/notasDiario")
.get((req, res)=>{
    Nota.find().then(notas=>{
        console.log(notas);
        res.json(notas);
    })
})
.post((req, res) =>{
    console.log("API add Nota -> ", req.body);
    const { id: _, ...newDoc } = { ...req.body };
    new Nota(newDoc).save()
    .then(nota=>{
        console.log("API .then() add Nota -> ",nota)
        res.send(nota)
    })
    
})


router.route("/notasDiario/:id")
.get((req, res)=>{
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
        return res.json({err});
    })
})
.post((req, res)=>{
    if (req.body._id && req.body._id != req.params.id) {
        return res.status(402).json({error: "los 'id' de url y body no coinciden"})
    }
    const { id: _, ...editDoc } = { ...req.body };
    Nota.findByIdAndUpdate(req.params.id, editDoc, { returnDocument: 'after'})
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
.delete((req, res)=>{
    Nota.findByIdAndDelete(req.params["id"])
    .then(notaEliminada => {
        return res.json({deleted: notaEliminada});
    })
    .catch(err => {
        return res.status(400).send(err);
    })
})


router.get("/calendarioNotasDiario", (req, res)=>{
    Nota.find().then(notas => {
        // corregir desfazaje por Huso Horario del Servidor donde corra
        notas.forEach(nota => {
            nota.date.setTime(new Date( nota.date.getTime() + nota.date.getTimezoneOffset() * 60 * 1000));
        });

        notas.sort((a, b) => { a.date - b.date});
        
        const listaFechas = [];
        let currentDate = new Date(notas[0].date);  // crear nuevo objeto sino se estaría modificando notas[0]
        while( currentDate < notas[notas.length-1].date){
            listaFechas.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        /* for (let currentDate = notas[0]; currentDate < notas[notas.length]; currentDate.setDate(currentDate.getDate() + 1)) {
            listaFechas.push(new Date(currentDate));
        } */

        const calendarioNotasDiario = (
                listaFechas.map(fecha=>{
                    return {
                        ...notas.find(nota=> nota.date.getTime() == fecha.getTime())?.toJSON(),
                        date: new Date(fecha),
                    };
                })
            )
            .map(elem =>{
                elem.fechaString = elem.date.toLocaleDateString();

                elem.LOR = "";
                switch(elem.sensibilidadL){
                    case "true": elem.LOR ="L"; break;
                    case "true+": elem.LOR = "L^+"; break;
                    default: elem.LOR = "";
                }
                if (elem.sensibilidadO) elem.LOR +="O";
                if (elem.sensibilidadR) elem.LOR +="R";
                
                elem.dolor = ""
                switch(elem.intensidadDolor){
                    case "-": elem.dolor=" "; break;
                    case "Leve-": elem.dolor="L^-"; break;
                    case "Leve": elem.dolor="L"; break;
                    case "Leve+": elem.dolor="L^+"; break;
                    case "Medio": elem.dolor="M"; break;
                    case "Severo": elem.dolor="S"; break;
                    case "Severo+": elem.dolor="S+"; break;
                    default: elem.dolor = "";
                }
                elem.mareos = elem.mareos ? "Si" : "";
                
                elem.afectó = "";
                switch(elem.afecto){
                    case "true": elem.afectó="Si"; break;
                    case "+-": elem.afectó="±"; break;
                    case "false": elem.afectó=""; break;
                    default: elem.afectó="";
                }
                elem.medicamento= "";
                switch (elem.medicina) {
                    case "Diclo100mg": elem.medicamento = "1"; break;
                    case "Diclo50mg+Relax": elem.medicamento = "2"; break;
                    case "Diclo50mg": elem.medicamento = "3"; break;
                    case "Diclo50mg*2": elem.medicamento = "4"; break;
                    case "Otro": elem.medicamento = "5"; break;
                    default:elem.medicamento = ""; break;
                }
                return elem;
            })
        
        res.json(calendarioNotasDiario);
    })
    .catch(err=>{
        console.log(err);
        if(err.name == 'CastError'){
            return res.status(400).json({
                error: err
            })
        }
        return res.json({err});
    })
})


module.exports = router;