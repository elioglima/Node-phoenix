const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModeloRetornoClient = libObj.Assign(
        require("../../ModeloRetornoClient")
    );

    try {
        let Registros;
        let { retorno } = await DBUsuario.Find({});
        if (retorno.length === 0) {
            ModeloRetornoClient.Mensagem = "Nenhum usuário encontrado.";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registro: {}
            };
            return ModeloRetornoClient;
        }
        Registros = JSON.parse(JSON.stringify(retorno));

        if (!Registros) {
            ModeloRetornoClient.Mensagem = "Nenhum registro localizado";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registro: {}
            };
            return ModeloRetornoClient;
        }

        for (let index = 0; index < Registros.length; index++) {
            delete Registros[index].PSWD;
            let ANome = Registros[index].Nome.toString().split(" ");
            Registros[index].Nick = ANome[0] + " " + ANome[ANome.length - 1];
        }

        ModeloRetornoClient.Status = 200;
        ModeloRetornoClient.Erro = false;
        ModeloRetornoClient.Mensagem = "Registro Localizado";

        ModeloRetornoClient.Response = {
            TotalRegistros: 1,
            Registros: Registros,
            KeyClient: require("../../sessao/token").GTK(
                Dados.Token.Resultado.Dados
            ).Resultado
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
