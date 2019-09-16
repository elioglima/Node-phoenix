const libsObj = require('../../../../libs/fn_obj')
const ModelCadatro = require('../ModelCadastro')
module.exports = (req) => {
    return new Promise((resolve, reject) => {
      let r = libsObj.Assign(ModelCadatro)
      
      retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }
        
        if (!req.Nome) {
            retorno.erro = true
            retorno.mensagem = "Informe :: (Nome)"
            reject(retorno)
            return 
        } 
  
        // r.CpfCnpj = req.CpfCnpj.replace(/\D/g, '')
        r.Nome = req.Nome

        retorno.erro = false
        retorno.mensagem = "Sucesso"
        retorno.response = r
        resolve(retorno)
        return 
    });
  }
  