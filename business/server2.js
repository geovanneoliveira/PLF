var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require('path');

var controler = require('../business/controler')
var Control = new controler();

const publicDir = path.join(__dirname, '../public')


var server = app.listen(8082, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at %s:%s Port", host, port)
});




//app.use(bodyParser.json())
//funcao usada para teste
//acesar http://localhost:8082/getStatus
function mudar(led_){
	if(led_ == 'led1'){
		if(Control.led1 == false){
			Control.led1 = true
		}
		else{
			Control.led1 = false
		}
	}

	if(led_ == 'led2'){
		if(Control.led2 == false){
			Control.led2 = true
		}
		else{
			Control.led2 = false
		}
	}

	if(led_ == 'led3'){
		if(Control.led3 == false){
			Control.led3 = true
		}
		else{
			Control.led3 = false
		}
	}


}

app.use('/static/', express.static(publicDir)) //????

app.get('/getStatus', urlencodedParser, (req, res) => {

	var retorno = {
		led1: Control.led1,
		led2: Control.led2,
		led3: Control.led3
	}
    res.send(retorno)
})

app.post('/thank', urlencodedParser, function(req, res) {
	console.log('ROLA')
    const textoRecebido = {
        led: req.body.led
    }
    mudar(req.body.led)

    console.log(textoRecebido)
    res.redirect('/')
});




app.get('/', (req, res) => {
    res.sendFile(publicDir + '/index.html')
})




app.use(function(req, res) {
    res.send('Erro 404 - Página não encontrada!');
});