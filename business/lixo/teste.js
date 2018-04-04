
var express = require("express");
var app = express();
var controler = require('../business/controler')
var Control = new controler();

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index2.html");
})

app.get("/1/a", (req,res)=> {
    //acender("a");
    Control.sala1.abrirSala();
    res.send("AEOO");
})

app.use(function(req, res, next) {
    res.status(404).send("Erro 404 - Página não encontrada!");
});

app.listen(80, function() {
    console.log("Servidor iniciado na porta 80");
});