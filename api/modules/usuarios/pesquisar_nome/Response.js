const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let ModelCadastro = libObj.Assign(require('../ModelCadastro'))
  let Registros 

  if (Dados.Metodo.toLowerCase() === 'like') {
    const { retorno } = await DBUsuario.LikeNome(Dados.Nome)
    Registros = libObj.Parse(retorno, ModelCadastro)
  } else {
    const { retorno } = await DBUsuario.FindNome(Dados.Nome)
    Registros = libObj.Parse(retorno, ModelCadastro)
  }
  
  return { 
    TotalRegistros:Registros.length,
    Registros: Registros, 
  }
}