const libsObj = require('../../../../libs/fn_obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        const ModelCadatro = libsObj.Assign(require('../ModelCadastro'))
        ModelCadatro['Metodo'] = ''
        let r = libsObj.Parse(req, ModelCadatro)

        retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }
        
        retorno.erro = false
        retorno.mensagem = "Sucesso"
        retorno.response = r
        resolve(retorno)
        return 
    });
  }
  