const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))
  let ModelCadastro = require('../ModelCadastro')
  const { retorno } = await DBUsuario.FindId(Dados)
  let Registros = libObj.Parse(retorno, ModelCadastro)

  if (!Registros) {
    return {
      TotalRegistros: 0,
      Registros: {},
    }
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