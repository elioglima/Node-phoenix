const libsObj = require('../../../../libs/fn_obj')
module.exports = (req) => {
    return new Promise((resolve, reject) => {
        
        const ModelCadatro = libsObj.Assign(require('../ModelCadastro'))
        let r = libsObj.Parse(req, ModelCadatro)
        retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }
        
        if (!req.EmpresaID) {
            retorno.erro = true
            retorno.mensagem = "Informe :: (EmpresaID)"            
            return reject(retorno)

        } else if (r.EmpresaID === 0) {
            retorno.erro = true
            retorno.mensagem = "O EmpresaID não pode ser 0."            
            return reject(retorno)

        } else if (!r.Nome) {
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
  