const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  const { retorno } = await DBUsuario.LikeNome(Dados.Nome)
  let ModelCadastro = libObj.Parse(retorno, require('../ModelCadastro'))
  return { 
    TotalRegistros:ModelCadastro.length,
    Registros: ModelCadastro, 
  }
}