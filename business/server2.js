var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require('path');

var controler = require('../business/controler')
var Control = new controler();

const publicDir = path.join(__dirname, '../public')

// Running Server Details.
var server = app.listen(8082, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at %s:%s Port", host, port)
});

app.use(bodyParser.json())

app.use('/static/', express.static(publicDir))

app.get('/getStatus', (req, res) => {
    // retornar pra o jQuery ou ajax 
    // http://rafaelcouto.com.br/atualizar-div-de-segundos-em-segundos-com-php-jquery-ajax/
})

app.post('/thank', function(req, res) {

    const textoRecebido = {
        nome: req.body.nome,
        msg: req.body.msg
    }

    console.log(textoRecebido)

    if (textoRecebido.nome == 'dayvid') {
        res.redirect('/')
    } else {
        res.send(textoRecebido)
    }

    /*if (req.body.sala == 1) {
        res.send('<h1>SALA ABERTA</h1>');
    } else {
        res.send('<h1>SALA FECHADA</h1>');
    }*/

});

app.get('/getCaba', (req, res) => {
    res.send('CABA CABA CABABA')
})

app.use('/', (req, res) => {
    res.sendFile(publicDir + '/index.html')
})

/*
app.use(function(req, res) {
    res.send('Erro 404 - Página não encontrada!');
});*/