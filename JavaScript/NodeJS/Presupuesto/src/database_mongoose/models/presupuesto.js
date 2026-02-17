import mongoose from "mongoose";
import { integer } from "mongoose-integer";
/*
{mes: "202401", type: "Ingreso", nombre: "Salario", monto: {total: 5000, extra: 500, habitual: 4500}, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "Alquiler", monto: 1500, habitual: true, formaPago: "Contado"},
{mes: "202401", type: "Gasto", nombre: "Expensas", monto: 300, habitual: true, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "Cochera", monto: 200, habitual: true, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "Luz", monto: 150, habitual: true, formaPago: "TC Visa BH"}
{mes: "202401", type: "Gasto", nombre: "Gas", monto: 100, habitual: true, formaPago: "TC Visa BH"}
{mes: "202401", type: "Ingreso", nombre: "Adelanto TC", monto: {total: 1000}, formaPago: "?????"}
{mes: "202401", type: "Gasto", nombre: "TC Powercard", monto: 9000, habitual: true, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "TC Visa BH", monto: 1000, habitual: true, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "Salidas", monto: 400, habitual: false, formaPago: "Contado"}
{mes: "202401", type: "Gasto", nombre: "Salidas", monto: 400, habitual: false, formaPago: "TC Powercard"}
{mes: "202401", type: "Inversion", Plataforma: "BuenBit", instrumento: "Bitcoin", montoARS: 1000, montoUSD: 100, formaPago: "???????"}
{mes: "202401", type: "Inversion", Plataforma: "IOL", instrumento: "BCBA:MELI", montoARS: 5000, montoUSD: 500, formaPago: "???????"}
{mes: "202401", type: "Inversion", Plataforma: "IOL", instrumento: "BCBA:GGAL", montoARS: 5000, montoUSD: 500, formaPago: "???????"}
{mes: "202401", type: "Inversion", Plataforma: "IOL", instrumento: "BCBA:PAMP", montoARS: 5000, montoUSD: 450, formaPago: "???????"}
{mes: "202402", type: "Ingreso", nombre: "Salario", monto: {total: 5000, extra: 500, habitual: 4500}, formaPago: "Contado"}
{mes: "202402", type: "Gasto", nombre: "Alquiler", monto: 1500, habitual: true, formaPago: "Contado"},
{mes: "202402", type: "Gasto", nombre: "Expensas", monto: 300, habitual: true, formaPago: "Contado"},
{mes: "202402", type: "Gasto", nombre: "Cochera", monto: 200, habitual: true, formaPago: "Contado"},

*/

const presupuestoEsquemaBase = new mongoose.Schema({
    mes: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(19|20)\d{2}(0[1-9]|1[0,1,2])$/.test(v);
            },
            message: props => `${props.value} no es un formato de mes válido (YYYYMM)`
        },
        index: true
    },
    nombre: {type: String, required: true, trim: true},
    formaPago: {
        type: String,
        required: true,
        enum: ["Contado", "TC Visa BH", "TC Powercard", "?????", "???????"]
    }
},
{
    discriminatorKey: "tipo",
    collection: "Movimiento",
    timestamps: true
});

const Movimiento = mongoose.model("Movimiento", presupuestoEsquemaBase);

const esquemaIngreso = new mongoose.Schema({
    monto: {
        total: {type: Number,  validate: {min: 0, validator: (v) => Number.isInteger(v) }},
        habitual: {type: Number,  validate: {min: 0, validator: (v) => Number.isInteger(v) || v === undefined}},
        extra: {type: Number,  validate: {min: 0, validator: (v) => Number.isInteger(v) || v === undefined}}
    },
}, {_id: false});

const Ingreso = Movimiento.discriminator("Ingreso", esquemaIngreso);

const esquemaGasto = new mongoose.Schema({
    monto: {type: Number, required: true, validate: {min: 0, validator: (v) => Number.isInteger(v)}},
    habitual: {type: Boolean, required: true},
    categoria: {type: String, required: false,
        enum: ["Vivienda", "Servicios", "Auto", "Alimentación", "Salud", "Ocio", "Otros"], index: true},
    mesResumen: [{type: String, validate: Movimiento.path("mes").validate[0].validator, required: false, _id: false}] // Array de meses relacionados para el resumen, validando el mismo formato que el campo "mes"
}, {_id: false});

const Gasto = Movimiento.discriminator("Gasto", esquemaGasto);

const esquemaInversion = new mongoose.Schema({
    plataforma: {type: String, required: true},
    instrumento: {type: String, required: true},
    cantidadInstrumento: {type: Number, required: false, validate: {min: 0}},
    montoARS: {type: Number, required: true},
    montoUSD: {type: Number, required: true}
}, {_id: false});

const Inversion = Movimiento.discriminator("Inversion", esquemaInversion);

// validaciones condicionales para campos específicos según el tipo de movimiento
Movimiento.schema.pre("validate", function(next) {
    if (this.tipo === "Ingreso") {
        if (!this.monto || typeof this.monto.total !== "number") {
            return next(new Error("El campo 'monto.total' es requerido para movimientos de tipo Ingreso y debe ser un número entero."));
        }
    } else if (this.tipo === "Gasto") {
        if (!this.monto || typeof this.monto !== "number") {
            return next(new Error("El campo 'monto' es requerido para movimientos de tipo Gasto y debe ser un número entero."));
        }
    } else if (this.tipo === "Inversion") {
        if (!this.plataforma || !this.instrumento) {
            return next(new Error("Los campos 'plataforma' e 'instrumento' son requeridos para movimientos de tipo Inversion."));
        }
    }
    next();
});

Movimiento.schema.index({ mes: 1, tipo: 1, nombre: 1 }); // Índice compuesto para consultas frecuentes por mes, tipo y nombre
Movimiento.schema.index({ tipo: 1, nombre: 1 }); // Índice para consultas por tipo y nombre
Movimiento.collection.createIndex({ mes: 1 }); // Índice para consultas por mes
Movimiento.collection.createIndex({ mes: 1, tipo: 1, nombre: 1 }); // Índice compuesto a nivel de colección para mejorar el rendimiento de consultas frecuentes
Movimiento.collection.createIndex({ tipo: 1, nombre: 1 }); // Índice a nivel de colección para consultas por tipo y nombre

export {Movimiento, Ingreso, Gasto, Inversion};