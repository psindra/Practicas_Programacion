const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
/* Definiciones / Constantes */
app.set("PORT", process.env.PORT || 7300);


require("./database_mongoose/connection");
const Nota = require("./database_mongoose/models/notasDiario");
const routes_notas = require("./routes/notes.route");
const routes_entornoWeb = require("./routes/entornoWeb.route");

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", routes_notas);
app.use("/web", routes_entornoWeb);

app.set("views", path.join(process.cwd(), "/src/views"));
app.set("view engine", 'ejs');




app.get("/", (req, res) => {
  // res.redirect("/web/notas");
  res.send("OK3");
})








/* Inicio servidor */
app.listen(app.get("PORT"), (err) => {
  console.log("listening on PORT: ", app.get("PORT"));
});



