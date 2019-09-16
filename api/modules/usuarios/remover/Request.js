const libsObj = require('../../../../libs/fn_obj')
module.exports = (req) => {
    return new Promise((resolve, reject) => {
        
        const ModelCadatro = {
            _id:'',
        }

        let r = libsObj.Parse(req, ModelCadatro)
      
        retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }
        
        if (!r._id) {
            retorno.erro = true
            retorno.mensagem = "Informe :: (_id)"
            reject(retorno)
            return 
        } 
  
        retorno.erro = false
        retorno.mensagem = "Sucesso"
        retorno.response = r
        resolve(retorno)
        return 
    });
  }
  