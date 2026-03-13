import mongoose from "mongoose";
import {Movimiento} from "./movimiento.js";

const esquemaIngreso = new mongoose.Schema({
    monto: {
        total: {
            type: Number,
            validate: {
                validator: (v) => v == v.toFixed(2) && v > 0,
                message: "El campo Monto.Total debe ser un valor entero positivo"
            },
            required: true
        },
        habitual: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => (v == v.toFixed(2) && v > 0) || v === undefined,
                message: "El campo Monto.Habitual debe ser un número entero positivo o vacío"
            }
        },
        extra: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => (v == v.toFixed(2) && v >= 0) || v === undefined,
                message: `El campo Monto.Extra debe ser un número entero positivo o vacío`
            }
        }
    },
    habitual: { type: Boolean, required: true, default: true }
}, { _id: false });

function fullfillIngresoSchema(doc, next) {
    
    if (!doc.monto?.total && !doc.monto?.habitual && !doc.monto?.extra) {
        throw new Error("El campo Monto debe tener algún dato");
    }
    // const indiceConsolidacion = (!!doc.monto.total << 0) + (!!doc.monto.habitual << 1) + (!!doc.monto.extra << 2);
    const indiceConsolidacion = (doc.monto.total ? 1 : 0) + (doc.monto.habitual ? 2 : 0) + (doc.monto.extra ? 4 : 0);
    const consolidacionDeDatos = {
        0b000: () => { throw new Error("El campo Monto debe tener algún dato") },
        0b001: () => { doc.monto.habitual = doc.monto.total; doc.monto.extra = 0;},
        0b010: () => { doc.monto.total = doc.monto.habitual;},
        0b011: () => { doc.monto.extra = doc.monto.total - doc.monto.habitual; },
        0b100: () => { throw new Error("El campo Monto debe tener más datos") },
        0b101: () => { doc.monto.habitual = doc.monto.total - doc.monto.extra;},
        0b110: () => { doc.monto.total = doc.monto.habitual + doc.monto.extra; },
        0b111: () => { if(doc.monto.total != doc.monto.habitual + doc.monto.extra)
                        throw new Error("El campo Monto tiene datos inconsistentes"); }
    }[indiceConsolidacion]();
    
    if(next){
        next();
    }
    };

esquemaIngreso.pre("updateOne", fullfillIngresoSchema);
esquemaIngreso.post("findOneAndUpdate", fullfillIngresoSchema);
esquemaIngreso.pre("findByIdAndUpdate", fullfillIngresoSchema);
esquemaIngreso.post("validate", fullfillIngresoSchema);

export const Ingreso = Movimiento.discriminator("ingreso", esquemaIngreso);
export default Ingreso;