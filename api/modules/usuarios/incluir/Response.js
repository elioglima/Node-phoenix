const libObj = require('../../../../libs/fn_obj')
const DBUsuario = require('../../../../db/models/Usuarios')

module.exports = async (Dados) => {

  // cadastro de usuarios
  let ModelCadastro = libObj.Parse(Dados, require('../ModelCadastro'))
  const { retorno } = await DBUsuario.FindNome(ModelCadastro.Nome)
  if (retorno.length > 0) {
    return { Response:'Usuário já existe'}
  }
  
  DBUsuario.Add(ModelCadastro)
  return { Response: 'Usuário cadastrado com sucesso.'}

}