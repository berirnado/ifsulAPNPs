const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res, next) {
    res.send('Olá Bernardo')
});

app.listen(3000, function() {
    console.log('Conexão realizada')
});
