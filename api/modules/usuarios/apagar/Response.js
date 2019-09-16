const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let RetornoClient = libObj.Assign(require('../../ModeloRetornoClient'))
  let { RetornoMetodo } = await DBUsuario.RemoveID(Dados)    
  if (RetornoMetodo.Erro === true) {
    RetornoClient.Erro = RetornoMetodo.Erro
    RetornoClient.Status = 400
  }

  RetornoClient.Mensagem = RetornoMetodo.Response
  RetornoClient.Response = RetornoMetodo.Response
  return RetornoClient

}