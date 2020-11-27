var conexao = require('../config/database');

var UsuarioSchema = conexao.Schema({
    nome:{type: String},
    email:{type: String},
    senha:{type: String},
    foto:{type: String},
})

module.exports = conexao.model("Usuário", UsuarioSchema)