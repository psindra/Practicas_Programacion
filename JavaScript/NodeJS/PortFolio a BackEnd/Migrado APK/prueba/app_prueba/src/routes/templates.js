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

__dirname = __dirname || process.cwd();
router.use("/css", express.static(path.join(__dirname, "../static/css")));
router.use("/assets", express.static(path.join(__dirname, "../static/assets")));
const back = require('androidjs').back;
let bar = {__dirname, process_: process.cwd(), path: path.join(process.cwd(), "../static/css")};
setTimeout(()=>{
    back.send("log", bar);
}, 3000);

module.exports = router;