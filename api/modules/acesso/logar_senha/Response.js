const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModeloRetornoClient = libObj.Assign(
        require("../../ModeloRetornoClient")
    );

    try {
        let Registros;
        let { retorno } = await DBUsuario.FindLogar({
            EmpresaID: Dados.EmpresaID,
            Doc1: Dados.Documento,
            PSWD: Dados.PSWD
        });

        if (retorno.length === 0) {
            ModeloRetornoClient.Mensagem = "Senha inválida";
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

        let ANome = Registro.Nome.toString().split(" ");
        Registro.Nick = ANome[0] + " " + ANome[ANome.length - 1];

        ModeloRetornoClient.Status = 200;
        ModeloRetornoClient.Erro = false;
        ModeloRetornoClient.Mensagem = "Registro Localizado";
        ModeloRetornoClient.Response = {
            TotalRegistros: 1,
            Registro: Registro,
            KeyClient: require("../../sessao/token").GTK({
                Logado: true,
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
