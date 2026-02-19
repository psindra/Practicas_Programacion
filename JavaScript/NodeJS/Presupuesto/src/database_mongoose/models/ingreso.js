import mongoose from "mongoose";
import { Movimiento } from "./presupuesto.js";

const esquemaIngreso = new mongoose.Schema({
    monto: {
        total: {
            type: Number,
            min: 0,
            validate: {
                validator: (v) => Number.isInteger(v),
                message: "El campo Monto.Total debe ser un valor valido"
            }
        },
        habitual: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => Number.isInteger(v) || v === undefined,
                message: "El campo Monto.Habitual debe ser un número entero no negativo o undefined"
            }
        },
        extra: {
            type: Number,
            validate: {
                min: 0,
                validator: (v) => Number.isInteger(v) || v === undefined,
                message: "El campo Monto.Extra debe ser un número entero no negativo o undefined"
            }
        }
    }
}, { _id: false });
export const Ingreso = Movimiento.discriminator("ingreso", esquemaIngreso);
export default Ingreso;