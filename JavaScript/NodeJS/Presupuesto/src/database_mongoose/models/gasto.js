import mongoose, { Mongoose } from "mongoose";
import Movimiento from "./movimiento.js";

const esquemaGasto = new mongoose.Schema({
    monto: {
        total: {
            type: Number,
            validate: [
                {
                    validator: (v) => Number.isInteger(v*100) && v > 0,
                    message: "El campo Monto.Total debe ser un valor entero positivo"
                }
            ],
            required: true
        },
        nroCuotas: {
            type: Number,
            validate: {
                min: 1,
                validator: (v) => Number.isInteger(v),
                message: "El campo Monto.NroCuotas debe ser un valor entero positivo"
            },
            required: function () {
                return this.formaPago !== "Contado";
            },
            disable: function () {
                return this.formaPago === "Contado";
            }
        }
    },
    habitual: { type: Boolean, required: true },
    categoria: {
        type: String,
        required: false,
        enum: ["Vivienda", "Servicios", "Tarjetas", "Auto", "Alimentación", "Salud", "Vestimenta", "Limpieza", "Ocio", "Otros"],
        index: true
    },
    mesResumen: [{
        type: String,
        validate: Movimiento.schema.path("mes").validate,
        required: false,
        _id: false
    }] // Array de meses relacionados para el resumen, validando el mismo formato que el campo "mes"
}, { _id: false });

esquemaGasto.pre("validate", function (next) {
    if (this.formaPago === "Contado" && this.monto.nroCuotas) {
        throw new Error("La forma de pago 'Contado' no puede tener cuotas. Por favor, elija una forma de pago diferente.");
    }
    return;
});
export const Gasto = Movimiento.discriminator("gasto", esquemaGasto);
export default Gasto;