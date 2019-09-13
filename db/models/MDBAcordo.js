const libDoc = require('../../libs/fn_docs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MDBAcordoSchema = new Schema({
    Data: { type: Date },
    CodCredor: { type: String },
    CodClien: { type: String },
    CodTitulo: { type: String },
    CpfCnpj: { type: String },
    Proposta: { type: Object },
    Boletos: [{ type: Array }]
}, { collection: 'Acordos' });


let MDBAcordo = mongoose.model('Acordos', MDBAcordoSchema);

module.exports = MDBAcordo;

module.exports.Garvar = (dados) => {
    (async (dados) => {
        
        let obj = {}
        obj['Data'] = Date()
        obj['CodCredor'] = dados.CodCredor
        obj['CodClien'] = dados.CodClien
        obj['CodTitulo'] = dados.CodTitulo
        obj['CpfCnpj'] = libDoc.FormatDoc(dados.CpfCnpj)
        obj['Proposta'] = dados.Proposta
        obj['Boletos'] = dados.Boletos
        const model = new MDBAcordo(obj);
        await model.save();

    })(dados)
}
