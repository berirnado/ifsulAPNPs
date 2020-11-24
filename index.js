const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req, res, next) {
    res.render('index.ejs',{})
});

app.get('/usuarios', function(req, res, next) {
    res.render('usuarios.ejs',{ usuarios:[
        {name: 'Diego', email:'dapporcellis@hotmail.com'},
        {name: 'Maria', email:'maria@hotmail.com'},
        {name: 'Tereza', email:'tereza@hotmail.com'},
        {name: 'Ana', email:'ana@hotmail.com'},
    ]})
});

app.get('/add', (req,res, next) => {
    res.render('adiciona.ejs')
});

app.post('/add', (req,res, next) => {
    
});


app.listen(3000, function() {
    console.log('Conexão realizada')
});
