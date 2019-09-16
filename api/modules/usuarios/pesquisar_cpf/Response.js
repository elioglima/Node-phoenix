const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let ModelCadastro = require('../ModelCadastro')
  let Registros 
  
  if (Dados.Metodo.toLowerCase() === 'like') {
    const { retorno } = await DBUsuario.LikeCPF(Dados.Numero)
    Registros = libObj.Parse(retorno, ModelCadastro)
  } else {
    const { retorno } = await DBUsuario.FindCPF(Dados.Nome)
    Registros = libObj.Parse(retorno, ModelCadastro)
  }

  if (!Registros) {
    return { 
      TotalRegistros:  0,
      Registros: {}, 
    }
  }

  return { 
    TotalRegistros:  Registros.length,
    Registros: Registros, 
  }
}