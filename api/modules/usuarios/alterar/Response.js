const libObj = require('../../../../libs/fn_obj')
const DBUsuario = require('../../../../db/models/Usuarios')

module.exports = async (Dados) => {

  let ModelCadastro = libObj.Parse(Dados, require('../ModelCadastro'))
  const { retorno } = await DBUsuario.FindId(ModelCadastro._id)
  if (retorno.length === 0) {
    return { Response:'_id informado não existe.'}
  }
  
  let { RetornoMetodo } = await DBUsuario.Update(ModelCadastro)
  console.log(RetornoMetodo)
  return { 
    Response: RetornoMetodo
  }

}