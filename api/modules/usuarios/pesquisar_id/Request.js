const libObj = require('../../../../libs/fn_obj')
const libDoc = require('../../../../libs/fn_docs')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let ModelCadatro = {
            EmpresaID:0,
            _id:'',
          }
          
        let r = libObj.Parse(req, ModelCadatro)
        retorno = {
            Erro:false,
            mensagem:"",
            response: {}
        }
        
        if (r.EmpresaID === 0) {
            retorno.Erro = true
            retorno.Msg = "Informe o número do CPF"            
            return reject(retorno)

        } else if (r._id.length === 0) {
            retorno.Erro = true
            retorno.Msg = "Informe o número do CPF"            
            return reject(retorno)
        } 

        retorno.Erro = false
        retorno.Msg = "Sucesso"
        retorno.response = r
        resolve(retorno)
        return 
    });
  }
  