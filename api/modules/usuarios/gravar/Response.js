const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModelCadastro = libObj.Parse(Dados, require("../ModelCadastro"));

    const { retorno } = await DBUsuario.FindId(ModelCadastro._id);
    console.log(retorno);
    if (retorno.length === 0) {
        return { Response: "_id informado não existe." };
    }

    let { RetornoMetodo } = await DBUsuario.Update(ModelCadastro);
    console.log(RetornoMetodo);
    return {
        Response: RetornoMetodo
    };
};
