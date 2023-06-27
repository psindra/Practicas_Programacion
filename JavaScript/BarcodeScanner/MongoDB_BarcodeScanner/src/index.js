import express from "express"
const app = express();

/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);

import "./database_mongoose/connection.js";
import ListaCompra, { detalleProducto } from "./database_mongoose/models/listaCompra.js";
import mongoose from "mongoose";
import { listaCompraRoute } from "./routes/listaCompra.route.js";
import { detalleProductoRoute } from "./routes/detalleProducto.route.js";

app.use(express.json());
app.use(express.urlencoded());


app.use("/api", listaCompraRoute);
app.use("/api", detalleProductoRoute);

app.get("/", (req, res, next,ers) =>{
  res.send("OK");
})

/* Inicio servidor */
app.listen(app.get("PORT"), err=>{
  console.log("listening on PORT: ", app.get("PORT"));
})