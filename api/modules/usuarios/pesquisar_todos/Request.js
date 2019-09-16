const libObj = require('../../../../libs/fn_obj')

module.exports = (req) => {
    return new Promise((resolve) => {
        let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))
        const ModelCadatro = libObj.Assign(require('../ModelCadastro'))
        
        ModelCadatro['Metodo'] = ''
        let r = libObj.Parse(req, ModelCadatro)
        RetornoClient.Mensagem = "Sucesso"
        RetornoClient.Response = r
        return resolve(RetornoClient)
    });
}
