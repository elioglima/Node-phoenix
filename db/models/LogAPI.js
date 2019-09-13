const libDoc = require('../../libs/fn_docs')
const config = require('../../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LogAPISchema = new Schema({
    Data: { type: Date },
    CpfCnpj: { type: String },
    CodCredor: { type: String },
    url: { type: String, required: true },
    PostSolicitado: { type: String },
    Metodo: { type: String },
    envio: { type: String },
    resposta: { type: String },
    obj: { type: Object },
    codigo: { type: String },
    mensagem: { type: String },
    xmlEnvio: { type: String },
    xmlRetorno: { type: String },
    jsonRetorno: { type: Object },
}, { collection: 'LogAPI' });


let LogAPI = mongoose.model('LogAPI', LogAPISchema);

module.exports = LogAPI;

module.exports.AddLog = (dados) => {
    (async (dados) => {

        let obj = {}
        obj['Data'] = Date()

        if (dados.obj) {
            if (dados.obj.CodCredor)
                obj['CodCredor'] = dados.obj.CodCredor

            if (dados.obj.CpfCnpj)
                obj['CpfCnpj'] = libDoc.FormatDoc(dados.obj.CpfCnpj)

        }

        obj['codigo'] = dados.Codigo
        obj['mensagem'] = dados.Mensagem
        obj['url'] = config.URL

        if (dados.obj.PostSolicitado)
            obj['PostSolicitado'] = dados.obj.PostSolicitado

        if (dados.obj.Metodo)
            obj['Metodo'] = dados.obj.Metodo

        if (dados.envio)
            obj['envio'] = dados.envio

        // 
        if (dados.xmlEnvio)
            obj['xmlEnvio'] = dados.xmlEnvio //.replace(/"/g, "'")

        if (dados.xmlRetorno)
            obj['xmlRetorno'] = dados.xmlRetorno.replace(/"/g, "'")

        if (dados.jsonRetorno)
            obj['jsonRetorno'] = dados.jsonRetorno

        if (dados.obj)
            obj['obj'] = dados.obj

        const model = new LogAPI(obj);
        await model.save();
    })(dados)
}
