import mongoose from "mongoose";

const puntoCarga_Schema = new mongoose.Schema({
    fecha: {type: Date, required: true, default: Date.now},
    estacionServicio: {type: String, required: true},
    datosPuntoCarga: {
        kmToEmpty_Antes: {type: Number, min: 0},
        litrosCarga: {type: Number, min: 0, require: true},
        dineroCarga: {type: Number, min: 0},
        kmPorLitro: {type: Number, min: 0},
        kmTrip: {type: Number, min: 0},
        kmH_Veloc_Promedio: {type: Number, min: 0},
        kmToEmpty: {type: Number, min: 0},
        kilometrajeAuto: {type: Number, min: 0},
    },
    funcionoQR: {type: Boolean}
}, { toJSON: { virtuals: true }, toObject: { getters: true, virtuals: true } })

puntoCarga_Schema.virtual("kmPorLitroREAL").get(function(){
    return this.kmTrip / this.litrosCarga;
})

// puntoCarga_Schema.path("fecha_new_Date").set(fecha=>{
//     console.log({fecha});
//     console.log("new Date(): ")
//     console.log(new Date());
//     console.log("Date(): ")
//     console.log(Date());
//     console.log("Date: ")
//     console.log(Date);
//     console.log("Date.now: ")
//     console.log(Date.now);
//     return fecha;
// })

export const PuntoCarga = new mongoose.model("puntoCarga", puntoCarga_Schema);
export default PuntoCarga;