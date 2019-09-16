const libObj = require('../../../../libs/fn_obj')
const DBUsuario = require('../../../../db/models/Usuarios')

module.exports = async (Dados) => {
  let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))
  let ModelCadastro = libObj.Parse(Dados, require('../ModelCadastro'))
  const { retorno } = await DBUsuario.FindNome(ModelCadastro.Nome)
  if (retorno.length > 0) 
    return { Response:'Usuário já existe'}
  
  let { RetornoMetodo } = await DBUsuario.Add(ModelCadastro)
  RetornoClient.Status = 200
  RetornoClient.Mensagem = 'Usuário cadastrado com sucesso.'
  RetornoClient.Response = RetornoMetodo
  return RetornoClient

}