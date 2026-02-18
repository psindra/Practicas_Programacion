import mongoose from "mongoose";
// import mongooseInteger from "mongoose-integer";
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
            validator: function (v) {
                return /^(19|20)\d{2}(0[1-9]|1[0-2])$/.test(v);
            },
            message: props => `${props.value} no es un formato de mes válido (YYYYMM)`
        }
    },
    nombre: { type: String, required: true, trim: true, maxlength: 50 },
    formaPago: {
        type: String,
        trim: true,
        enum: ["Contado", "TC Visa BH", "TC Powercard", "Otros"],
        required: true,
    }
},
    {
        discriminatorKey: "tipo",     // usamos "tipo" en español
        collection: "movimientos",
        timestamps: true
    });

// presupuestoEsquemaBase.plugin(mongooseInteger);

/**
 * Los indices se pueden definir en el Schema, a la hora de compilar, o directamente a nivel de colección. 
 * En el primero caso, Mongoose se encarga de crear los índices automáticamente al iniciar la aplicación (si no existen y
 *  el autoIndex está activado).
 * En el segundo caso, crea el indice en tiempo de ejecución, lo cual puede ser útil para índices que se crean o modifican
 * dinámicamente,(no es necesario para índices estáticos definidos en el Schema).
 * En general, para índices estáticos, es recomendable definirlos en el Schema para mantener la definición del modelo
 * centralizada y aprovechar las características de Mongoose.
 */
/**
 * índices compuestos recomendados
 */
presupuestoEsquemaBase.index({ mes: 1, tipo: 1, nombre: 1 }); // Índice compuesto para consultas frecuentes por mes, tipo y nombre
presupuestoEsquemaBase.index({ tipo: 1, nombre: 1 }); // Índice para consultas por tipo y nombre
presupuestoEsquemaBase.index({ mes: 1 }); // Índice para consultas por mes

/**
 * Modelo base
 */
const Movimiento = mongoose.model("Movimiento", presupuestoEsquemaBase);
Movimiento.createIndexes(); // Asegura que los índices definidos en el Schema se creen en la colección

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

const Ingreso = Movimiento.discriminator("ingreso", esquemaIngreso);

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
        validate: Movimiento.path("mes").validate[0].validator,
        required: false,
        _id: false
    }] // Array de meses relacionados para el resumen, validando el mismo formato que el campo "mes"
}, { _id: false });

const Gasto = Movimiento.discriminator("gasto", esquemaGasto);

/**
 * -----------------------
 * Discriminador: inversion
 * - plataforma, instrumento requeridos
 * - cantidadInstrumento opcional (puede ser decimal)
 * - montoARS, montoUSD: Number >= 0 (recomiendo centavos si son fiat)
 */
const esquemaInversion = new mongoose.Schema({
    plataforma: { type: String, required: true, trim: true, maxlength: 50 },
    instrumento: { type: String, required: true, trim: true, maxlength: 50 },
    cantidadInstrumento: { type: Number, required: false, min: 0 },
    montoARS: { type: Number, required: true, min: 0, validate: { validator: (v) => Number.isInteger(v), message: "El campo MontoARS debe ser un número entero no negativo" } },
    montoUSD: { type: Number, required: true, min: 0, validate: { validator: (v) => Number.isInteger(v), message: "El campo MontoUSD debe ser un número entero no negativo" } }
}, { _id: false });

const Inversion = Movimiento.discriminator("inversion", esquemaInversion);

/**
 * -----------------------
 * Validaciones condicionales globales (pre-validate)
 */
Movimiento.schema.pre("validate", function (next) {
    if (this.tipo === "ingreso") {
        if (!this.monto || typeof this.monto.total !== "number") {
            return next(new Error("El campo 'monto.total' es requerido para movimientos de tipo Ingreso y debe ser un número entero."));
        }
    } else if (this.tipo === "gasto") {
        if (!this.monto || typeof this.monto !== "number") {
            return next(new Error("El campo 'monto' es requerido para movimientos de tipo Gasto y debe ser un número entero."));
        }
        if (this.habitual === undefined) {
            return next(new Error("Para tipo 'gasto' el campo 'habitual' es requerido (true/false)."));
        }
    } else if (this.tipo === "inversion") {
        if (!this.plataforma || !this.instrumento) {
            return next(new Error("Los campos 'plataforma' e 'instrumento' son requeridos para movimientos de tipo Inversion."));
        }
    }
    next();
});

// /**
//  * -----------------------
//  * los indices se pueden definir en el Schema, a la hora de compilar, o directamente a nivel de colección. 
//  * En el primero caso, Mongoose se encarga de crear los índices automáticamente al iniciar la aplicación (si no existen).
//  * En el segundo caso, crea el indice en tiempo de ejecución, lo cual puede ser útil para índices que se crean o modifican dinámicamente, pero no es necesario para índices estáticos definidos en el Schema.
//  * En general, para índices estáticos, es recomendable definirlos en el Schema para mantener la definición del modelo centralizada y aprovechar las características de Mongoose.
//  */
// Movimiento.collection.createIndex({ mes: 1 }); // Índice para consultas por mes
// Movimiento.collection.createIndex({ mes: 1, tipo: 1, nombre: 1 }); // Índice compuesto a nivel de colección para mejorar el rendimiento de consultas frecuentes
// Movimiento.collection.createIndex({ tipo: 1, nombre: 1 }); // Índice a nivel de colección para consultas por tipo y nombre

export { Movimiento, Ingreso, Gasto, Inversion };
export default Movimiento;