import mongoose from "mongoose";
import { Movimiento } from "./presupuesto.js";

const esquemaGasto = new mongoose.Schema({
    monto: {
        type: Number,
        required: true,
        validate: {
            min: 0,
            validator: (v) => Number.isInteger(v),
            message: "El campo Monto debe ser un número entero no negativo"
        }
    },
    habitual: { type: Boolean, required: true },
    categoria: {
        type: String,
        required: false,
        enum: ["Vivienda", "Servicios", "Auto", "Alimentación", "Salud", "Ocio", "Otros"],
        index: true
    },
    mesResumen: [{
        type: String,
        validate: Movimiento.schema.path("mes").validate,
        required: false,
        _id: false
    }] // Array de meses relacionados para el resumen, validando el mismo formato que el campo "mes"
}, { _id: false });
export const Gasto = Movimiento.discriminator("gasto", esquemaGasto);
export default Gasto;