import mongoose from "mongoose";
import {Movimiento} from "./movimiento.js";

const esquemaIngreso = new mongoose.Schema({
    monto: {
        total: {
            type: Number,
            validate: {
                validator: (v) => Number.isInteger(v*100) && v > 0,
                message: "El campo Monto.Total debe ser un valor entero positivo"
            }
        },
        habitual: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => (Number.isInteger(v*100) && v > 0) || v === undefined,
                message: "El campo Monto.Habitual debe ser un número entero positivo o vacío"
            }
        },
        extra: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => (Number.isInteger(v*100) && v >= 0) || v === undefined,
                message: `El campo Monto.Extra debe ser un número entero positivo o vacío`
            }
        }
    },
    habitual: { type: Boolean, required: true, default: true }
}, { _id: false });

esquemaIngreso.post("validate", function(_, next) {
    if (!this.monto.total && !this.monto.habitual && !this.monto.extra) {
        throw new Error("El campo Monto debe tener algún dato");
    }
    // const indiceConsolidacion = (!!this.monto.total << 0) + (!!this.monto.habitual << 1) + (!!this.monto.extra << 2);
    const indiceConsolidacion = (this.monto.total ? 1 : 0) + (this.monto.habitual ? 2 : 0) + (this.monto.extra ? 4 : 0);
    const consolidacionDeDatos = {
        0b000: () => { throw new Error("El campo Monto debe tener algún dato") },
        0b001: () => { /* No se necesita consolidar ya que con el monto.total es suficiente */},
        0b010: () => { this.monto.total = this.monto.habitual;},
        0b011: () => { this.monto.extra = this.monto.total - this.monto.habitual; },
        0b100: () => { throw new Error("El campo Monto debe tener más datos") },
        0b101: () => { this.monto.habitual = this.monto.total - this.monto.extra;},
        0b110: () => { this.monto.total = this.monto.habitual + this.monto.extra; },
        0b111: () => { if(this.monto.total != this.monto.habitual + this.monto.extra)
                        throw new Error("El campo Monto tiene datos inconsistentes"); }
    }[indiceConsolidacion]();
    
    next();
    }
);

export const Ingreso = Movimiento.discriminator("ingreso", esquemaIngreso);
export default Ingreso;