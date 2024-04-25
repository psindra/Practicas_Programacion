 const express = require("express");
 const router = require("express").Router();
 const path = require("path");

router.get("/", (req, res)=>{
    res.render("index.ejs")
})

router.get("/index.html", (req, res)=>{
    res.render("index.ejs")
})

router.get("/proyectos.html", (req, res)=>{
    res.render("proyectos.ejs")
})

router.get("/formulario.html", (req, res)=>{
    res.render("formulario.ejs")
})

// router.get("/css/main.css", (req, res)=>{
//     res.sendFile("src/static/css/main.css", {root: process.cwd()});
// })

router.use("/css", express.static(path.join(process.cwd(), "/src/static/css")));
router.use("/assets", express.static(path.join(process.cwd(), "/src/static/assets")));

module.exports = router;