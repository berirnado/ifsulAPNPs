const express = require('express')
const app = express();

app.get('/', function(req, res, next) {
    res.send('Olá Bernardo')
});

app.listen(3000, function() {
    console.log('Conexão realizada')
});
