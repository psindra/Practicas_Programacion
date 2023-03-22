// import express from "express";
// import path from "path";
// const express = import("express");
// const path =  import("path");
const express = require("express");
const path = require("path");
const ejs_routes = require("./routes/templates")

const app = express();

/* Definiciones / Constantes */
__dirname = __dirname || process.cwd();
app.set("PORT", process.env.PORT || 3000);


app.use('/static', express.static(path.join(__dirname, "/static")));

app.set("views", path.join(__dirname, "/views"));
app.use('/templates', ejs_routes);




app.get("/", (req,res) =>{
    res.send("iniciado");
})


/* Inicio servidor */
app.listen(app.get("PORT"), (err)=>{
    console.log("listening on PORT: ", app.get("PORT"));
});