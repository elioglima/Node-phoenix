const DBUsuario = require('../../../../db/models/Usuarios')
module.exports = async (Dados) => {
  return await DBUsuario.RemoveID(Dados._id)  
}