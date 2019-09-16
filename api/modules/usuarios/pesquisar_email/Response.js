const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))
  let ModelCadastro = libObj.Assign(require('../ModelCadastro'))
  let Registros
  
  if (Dados.Metodo.toLowerCase() === 'like') {
    const { retorno } = await DBUsuario.LikeMail(Dados)
    Registros = libObj.Parse(retorno, ModelCadastro)
  } else {
    const { retorno } = await DBUsuario.FindMail(Dados)
    Registros = libObj.Parse(retorno, ModelCadastro)
  }

  RetornoClient.Mensagem = 'Nenhum resultado localizado'
  RetornoClient.Response = {
    TotalRegistros: 0,
    Registros: [],
  }

  if (!Registros)
    return RetornoClient

  RetornoClient.Mensagem = 'Consulta bem sucedida'
  RetornoClient.Response = {
      TotalRegistros: Registros.length,
      Registros: Registros,
  }

  return RetornoClient 
}