const libObj = require('../../libs/fn_obj')
const libDoc = require('../../libs/fn_docs')
const config = require('../../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    EmpresaID: { type: Number},
    Data: { type: Date, default: Date.now },
    Email: { type: String },
    Nome: { type: String },
    TipoPessoaID: { type: Number },
    Doc1: { type: String },
    Doc2: { type: String },
    CategoriaID: { type: Number},
}, { collection: 'Usuario' });

let Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;

const Find = (dados) => new Promise(async (resolve) => {
    const query = Usuario.find(dados)
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

const Todos = (Dados) => new Promise(async (resolve) => {
    let where = {}
    if ((Dados.EmpresaID) && (parseInt(Dados.EmpresaID) > 0)) {
        where = {EmpresaID:Dados.EmpresaID}
    }
    
    const query = Usuario.find(where)
    query instanceof mongoose.Query; 
    const obj =  await query;
    return resolve({ retorno: obj }) 
})

const FindId = (Dados) => new Promise(async (resolve) => {
    const query = Usuario.find({EmpresaID:Dados.EmpresaID, _id:Dados._id.toString()})
    query instanceof mongoose.Query; 
    const obj =  await query;
    return resolve({ retorno: obj }) 
})

module.exports.Add = (dados) => new Promise(async (resolve) => {    
    delete dados._id 
    const model = new Usuario(dados);   
    return await model.save()
            .then(resultado => resolve({RetornoMetodo: {Erro:false, Response:resultado}}))
            .catch(err => resolve({RetornoMetodo: {Erro:true, Response:err}}))
})

module.exports.Update = (dados) => new Promise(async (resolve) => {    
    return await Usuario.findById(dados._id, function(err, doc) {              
        if (err) 
            return resolve({RetornoMetodo:{Erro:true, Response:err}})

        let DadosAr = Object.keys(dados)
        for (let iDadosAr = 0; iDadosAr < DadosAr.length; iDadosAr++) {
            const element = DadosAr[iDadosAr];
            doc[element] = dados[element]               
        }            

        doc.save()
        .then(resultado => resolve({RetornoMetodo: {Erro:false, Response:resultado}}))
        .catch(err => resolve({RetornoMetodo: {Erro:true, Response:err}}))
    })  
})

module.exports.RemoveID = (_id) => new Promise(async (resolve) => {
    let { retorno } = await FindId(_id)
    if ((!retorno) || (retorno.length === 0))
        return resolve({RetornoMetodo: {Erro:true, Response:'Registro não existe ::: ' + _id + '.'}})

    return await Usuario.findByIdAndDelete(_id).exec()
                    .then(async resultado => {
                        if (resultado === null)
                            return resolve({RetornoMetodo: {
                                                Erro:true, 
                                                Response:'Registro não existe ::: ' + _id + '.'
                                            }})

                        // let { retorno } = await FindId(_id)
                        // if ((retorno) || (retorno.length > 0))
                        //     return resolve({RetornoMetodo: {
                        //                         Erro:true, 
                        //                         Response:'Não foi possível remover o registro ::: ' + _id + '.'
                        //                     }})

                        return resolve({RetornoMetodo: {
                                            Erro:false, 
                                            Response:'Registro removido com sucesso.'
                                        }})
                    })
                    .catch(err => resolve({RetornoMetodo: {
                                                Erro:true, 
                                                Response:err
                                            }}))
})  




module.exports.FindCPF = (value) => new Promise(async (resolve) => {
    const retorno = Usuario.find({Doc1:value})
    return resolve({ retorno }) 
})

module.exports.LikeCPF = (value) => new Promise(async (resolve) => {
    const query = Usuario.find({Doc1:new RegExp(value, 'i')})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

const FindNome = (Dados) => new Promise(async (resolve) => {
    const query = Usuario.find({EmpresaID:Dados.EmpresaID, Nome:Dados.Nome})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

const LikeNome = (dados) => new Promise(async (resolve) => {
    const query = Usuario.find({EmpresaID: dados.EmpresaID, Nome:new RegExp(dados.nome, 'i')})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

const FindMail = (Dados) => new Promise(async (resolve) => {
    const query = Usuario.find({EmpresaID:Dados.EmpresaID, Email:Dados.Email})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

const LikeMail = (dados) => new Promise(async (resolve) => {
    const query = Usuario.find({EmpresaID: dados.EmpresaID, Email:new RegExp(dados.Email, 'i')})
    query instanceof mongoose.Query; 
    const docs =  await query;
    return resolve({ retorno: docs }) 
})

module.exports.FindId = FindId
module.exports.Todos = (Dados) => Todos(Dados)
module.exports.FindNome = (Dados) => FindNome(Dados)
module.exports.LikeNome = (Dados) => LikeNome(Dados)
module.exports.FindMail = (Dados) => FindMail(Dados)
module.exports.LikeMail = (Dados) => LikeMail(Dados)