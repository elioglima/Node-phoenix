const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModeloRetornoClient = require("../../ModeloRetornoClient");

    try {
        let ModelCadastro = require("../ModelCadastro");
        let Registros;

        if (
            Dados.Metodo &&
            Dados.Metodo.length > 0 &&
            Dados.Metodo.toLowerCase() === "like"
        ) {
            const { retorno } = await DBUsuario.LikeCPF(Dados);
            Registros = libObj.Parse(retorno, ModelCadastro);
        } else {
            const { retorno } = await DBUsuario.FindCPF(Dados);
            Registros = libObj.Parse(retorno, ModelCadastro);
        }

        if (!Registros) {
            ModeloRetornoClient.Mensagem = "Nenhum registro localizado";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registros: {}
            };
            return ModeloRetornoClient;
        }

        ModeloRetornoClient.Status = 200;
        ModeloRetornoClient.Erro = false;
        ModeloRetornoClient.Response = {
            TotalRegistros: Registros.length,
            Registros: Registros
        };
        return ModeloRetornoClient;
    } catch (error) {
        ModeloRetornoClient.Status = 500;
        ModeloRetornoClient.Erro = true;
        ModeloRetornoClient.Mensagem = "Erro interno";
        ModeloRetornoClient.Response = error;
        return ModeloRetornoClient;
    }
};
