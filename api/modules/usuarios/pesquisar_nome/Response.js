const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let ModelCadastro = libObj.Assign(require('../ModelCadastro'))
  let Registros 

  if (Dados.Metodo.toLowerCase() === 'like') {
    const { retorno } = await DBUsuario.LikeNome(Dados)
    Registros = libObj.Parse(retorno, ModelCadastro)
  } else {
    const { retorno } = await DBUsuario.FindNome(Dados)
    Registros = libObj.Parse(retorno, ModelCadastro)
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