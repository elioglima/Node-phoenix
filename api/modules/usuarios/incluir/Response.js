const DBUsuario = require('../../../../db/models/Usuarios')

module.exports = async (Dados) => {

  // cadastro de usuarios
  Cadastro = {
    Nome:Dados.Nome
  }
   

  const { retorno } = await DBUsuario.FindNome(Dados.Nome)

  if (retorno.length > 0) {
    return { Response:'Usuário já existe'}
  }
  
  DBUsuario.Add(Cadastro)
  return { Response: 'Usuário cadastrado com sucesso.'}

}