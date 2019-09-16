const libObj = require('../../../../libs/fn_obj')
const mongoose = require('mongoose')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let RetornoClient = libObj.Assign(require('../../ModeloRetornoClient'))
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

        RetornoFunc = (Mensagem, Erro = true) => {
            RetornoClient.Erro = Erro
            RetornoClient.Mensagem = Mensagem

            if (Erro === true) {
                RetornoClient.Status = 400
                return reject(RetornoClient)
            }
            
            RetornoClient.Status = 200
            return resolve(RetornoClient)
        }

        if (parseInt(r.EmpresaID) <= 0) 
            return RetornoFunc("Código da empresa não informado..")

        else if (r._id.length < 5) 
            return RetornoFunc("_id informado não é válido..")

        if (!mongoose.Types.ObjectId.isValid(r._id)) 
            return RetornoFunc("_id informado não é válido..")

        RetornoClient.Response = r
        return RetornoFunc("Sucesso", false)
    });
  }
  