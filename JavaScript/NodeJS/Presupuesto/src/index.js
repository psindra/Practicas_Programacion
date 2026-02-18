import express from 'express';
const app = express();

/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

import "./database_mongoose/connection.js";
import Movimiento, { Ingreso, Gasto, Inversion } from './database_mongoose/models/presupuesto.js';

app.use(express.json());
app.use(express.urlencoded());

// configuración de dirname para ES Modules
import path from "path"; import { fileURLToPath } from 'url'; const __dirname = path.dirname(fileURLToPath(import.meta.url));

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) =>{
    res.send("¡Hola Mundo! Este es el endpoint raíz de la API de Presupuesto.")
})

app.listen(app.get("PORT"), err=>{
    if(err){
        console.error("Error al iniciar el servidor: ", err);
    } else {
        console.log("Servidor escuchando en el puerto: ", app.get("PORT"));
    }
})

// ???? porqué????
export { Movimiento, Ingreso, Gasto, Inversion, app };