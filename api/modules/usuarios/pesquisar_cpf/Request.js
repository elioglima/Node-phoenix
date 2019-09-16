const libObj = require('../../../../libs/fn_obj')
const libDoc = require('../../../../libs/fn_docs')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let ModelCadatro = {
            Metodo:'',
            Numero:'',
          }
          
        let r = libObj.Parse(req, ModelCadatro)

        retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }
        
        if (r.Numero.length === 0) {
            retorno.erro = true
            retorno.mensagem = "Informe o número do CPF"
            reject(retorno)
            return

        } else if (!libDoc.ValidaCPF(r.Numero)) {
            retorno.erro = true
            retorno.mensagem = "Número do CPF é inválido."
            reject(retorno)
            return 
        } 

        r.Numero = libDoc.FormatDoc(r.Numero)
        retorno.erro = false
        retorno.mensagem = "Sucesso"
        retorno.response = r
        resolve(retorno)
        return 
    });
  }
  