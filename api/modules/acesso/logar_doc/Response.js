const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModeloRetornoClient = libObj.Assign(
        require("../../ModeloRetornoClient")
    );

    try {
        let Registro;
        let { retorno } = await DBUsuario.FindCPF({
            EmpresaID: Dados.EmpresaID,
            Doc1: Dados.Documento
        });

        if (retorno.length === 0) {
            ModeloRetornoClient.Mensagem = "Nenhum registro localizado";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registro: {}
            };
            return ModeloRetornoClient;
        }

        Registro = JSON.parse(JSON.stringify(retorno[0]));
        delete Registro["PSWD"];
        if (!Registro) {
            ModeloRetornoClient.Mensagem = "Nenhum registro localizado";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registro: {}
            };
            return ModeloRetornoClient;
        }

        ModeloRetornoClient.Status = 200;
        ModeloRetornoClient.Erro = false;
        ModeloRetornoClient.Mensagem = "Registro Localizado";
        ModeloRetornoClient.Response = {
            TotalRegistros: 1,
            Registro: Registro,
            KeyClient: require("../../sessao/token").GTK({
                Logado: false,
                Usr: Registro
            }).Resultado
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
