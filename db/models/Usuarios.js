const libDoc = require('../../libs/fn_docs')
const config = require('../../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    Data: { type: Date },
    Nome: { type: String },
}, { collection: 'Usuario' });

let Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
module.exports.Add = (dados) => {
    return (async (dados) => {
        let obj = {}
        obj['Data'] = Date()
        obj['Nome'] = dados.Nome
        const model = new Usuario(obj);
        model.save()
    })(dados)
}

module.exports.Find = (dados) => new Promise(async (resolve) => {
    const query = Usuario.find(dados)
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

module.exports.FindNome = (nome) => new Promise(async (resolve) => {
    const retorno = Usuario.find({Nome:nome})
    return resolve({ retorno }) 
})

module.exports.LikeNome = (nome) => new Promise(async (resolve) => {
    const query = Usuario.find({Nome:new RegExp(nome, 'i')})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

module.exports.FindNome = (nome) => new Promise(async (resolve) => {
    const query = Usuario.find({Nome:nome})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})