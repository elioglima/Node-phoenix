const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let ModelCadastro = require('../ModelCadastro')
  const { retorno } = await DBUsuario.FindId(Dados)
  let Registros = libObj.Parse(retorno, ModelCadastro)

  if (!Registros) {
    return { 
      TotalRegistros:  0,
      Registros: {}, 
    }
  }

  let RetornoReponse = {
    Status: 200,
    Msg:'Nenhum resultado localizado',
    Dados: {     
      TotalRegistros:0,
      Registros: [], 
    }
  }
  
  if (!Registros)
    return RetornoReponse

  let mensagem = 'Consulta bem sucedida'

  RetornoReponse = {
    Status: 200,
    Msg:mensagem,
    Dados: {     
      TotalRegistros:Registros.length,
      Registros: Registros, 
    }
  }
  
  return RetornoReponse
} 