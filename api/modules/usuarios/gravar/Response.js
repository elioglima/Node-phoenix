const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    try {

        let ModelCadastro = libObj.Parse(Dados, require("../ModelCadastro"));

        const { retorno } = await DBUsuario.FindId(ModelCadastro);
        if (retorno.length === 0) {
            return {
                Status: 401,
                Erro: false,
                Mensagem: 'Nenhum registro localizado com o _id informado.',
                Response: {
                    KeyClient: require("../../sessao/token").GTK(
                        Dados.Token.Resultado.Dados
                    ).Resultado
                }
            }
        }

        let { RetornoMetodo } = await DBUsuario.Editar(ModelCadastro);

        return {
            Status: 200,
            Erro: RetornoMetodo.Erro,
            Mensagem: RetornoMetodo.Mensagem,
            Response: {
                KeyClient: require("../../sessao/token").GTK(
                    Dados.Token.Resultado.Dados
                ).Resultado
            }
        };

    } catch (err) {
        return {
            Status: 500,
            Erro: true,
            Response: {
                Mensagem: err
            }
        };
    }
};
