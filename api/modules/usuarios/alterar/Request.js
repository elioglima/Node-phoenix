const libObj = require('../../../../libs/fn_obj')
const libDoc = require('../../../../libs/fn_docs')
const ModelCadatro = require('../ModelCadastro')
module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let r = libObj.Parse(req, ModelCadatro)
      
        retorno = {
            erro:false,
            mensagem:"",
            response: {}
        }

        RetornaErro = (mensagem) => {
            retorno.erro = true
            retorno.mensagem = mensagem
            return reject(retorno)
        }

        
        if (!r._id) {
            return RetornaErro("Informe :: (__id)")
            
        } else if ((r.TipoPessoa != 0) && (r.TipoPessoa != 1)) {
            return RetornaErro("Informe :: (Tipo Pessoa: 0 Física, 1 Jurídica)")
            
        } else if ((r.TipoPessoa === 0) && (r.Doc1.length === 0)) {
            return RetornaErro("Informe :: (CPF)")

        } else if ((r.TipoPessoa === 1) && (r.Doc1.length === 0)) {
            return RetornaErro("Informe :: (CNPJ)")

        } else if ((r.TipoPessoa === 0) && (!libDoc.ValidaCPF(r.Doc1))) {
            return RetornaErro("Informe :: (CPF não é válido)")

        } else if ((r.TipoPessoa === 1) && (!libDoc.ValidaCNPJ(r.Doc1))) {
            return RetornaErro("Informe :: (CNPJ não é válido)")
            
        }

        r.Doc1 = libDoc.FormatDoc(r.Doc1)

        retorno.erro = false
        retorno.mensagem = "Sucesso"
        retorno.response = r
        return resolve(retorno)  
    });
  }
  