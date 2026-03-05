import express from 'express';
const app = express();

/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

/* Base de Datos Mongoose */
import "./database_mongoose/connection.js";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
import presupuestoRoute from "./routes/presupuesto.route.js";
app.use("/api", presupuestoRoute);
import ingresoRoute from './routes/ingreso.route.js';
app.use("/api", ingresoRoute);
import movimientoRoute from './routes/movimiento.route.js';
app.use("/api", movimientoRoute);
import gastoRoute from './routes/gasto.route.js';
app.use("/api", gastoRoute);
import inversionRoute from './routes/inversion.route.js';
app.use("/api", inversionRoute);

// configuración de dirname para ES Modules
import path from "path"; import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
/* * Middleware para servir archivos estáticos desde la carpeta "public" */
app.use(express.static(path.join(__dirname, "public")));


app.get("/api", (req, res, next) => {
    res.send("¡Hola Mundo! Este es el endpoint raíz de la API de Presupuesto.")
})
app.get("/prueba", (...params) => {
    console.log("Parámetros recibidos en /prueba: ", [...params]);
    return params[1].json({ parametros: JSON.stringify([...params]) });
})

app.listen(app.get("PORT"), err => {
    if (err) {
        console.error("Error al iniciar el servidor: ", err);
    } else {
        console.log("Servidor escuchando en el puerto: ", app.get("PORT"));
    }
})


import "./movimientoEjemplo.js";