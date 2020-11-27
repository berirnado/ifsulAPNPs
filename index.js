const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var path = require('path')
var upload = require('./config/configMulter')

var Usuario = require('./model/usuario');

app.use(cookieParser());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req, res, next) {
    Usuario.find({}).exec(function(err, docs) {
        if (!err){
            if (docs) {
                res.render('index.ejs',{Usuarios: docs})
            }
        } else {
            console.log(err)
        }
    })
});

app.get('/add', (req,res, next) => {
    res.render('adiciona.ejs')
});

app.post('/add', upload.single("txtFoto"), (req,res, next) => {
    var usuario = new Usuario({
        nome: req.body.txtNome,
        email: req.body.txtEmail,
        senha: req.body.txtSenha,
        foto: req.file.filename
    });

    usuario.save(function(err){
        if (err) {
            console.log(err)
        } else {
            res.redirect('/');
        }
    })
});

app.get('/del/:id', (req, res, next) => {
    Usuario.findByIdAndDelete(req.params.id)
    .then(
        res.redirect('/')
    )
    .catch(err => console.log(err))
})

app.get('/edit/:id', (req, res, next) => {
    Usuario.findById(req.params.id)
    .then(user => res.render('edita.ejs',{Usuario: user}))
    .catch(err => console.log(err))
})

app.post('/edit/:id', upload.single("txtFoto"), (req, res, next) => {
    Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.txtNome,
        email: req.body.txtEmail,
        senha: req.body.txtSenha,
        foto: req.file.filename
    })
    .then(res.redirect('/'))
    .catch(err=>console.log(err))
})

app.post('/', (req, res, next) => {
    Usuario.find({nome: new RegExp(req.body.txtPesquisa,'gi')})
    .then(docs => res.render('index.ejs', {Usuarios: docs}))
    .catch(err => console.log(err))
})

app.listen(3000, function() {
    console.log('Conexão realizada')
});
