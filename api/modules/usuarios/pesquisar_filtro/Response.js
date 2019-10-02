const DBUsuario = require("../../../../db/models/Usuarios");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
    let ModeloRetornoClient = libObj.Assign(
        require("../../ModeloRetornoClient")
    );

    try {
        let Registros;
        let { retorno } = await DBUsuario.LikeNome({
            EmpresaID: Dados.EmpresaID,
            Nome: Dados.TextoPesquisa
        });

        
        if (retorno.TotalRegistros === 0) {
            ModeloRetornoClient.Status = 200;
            ModeloRetornoClient.Mensagem = "Nenhum usuário encontrado.";
            ModeloRetornoClient.Response = {
                TotalRegistros: 0,
                Registros: []
            };
            return ModeloRetornoClient;
        }
        
        Registros = JSON.parse(JSON.stringify(retorno.Registros));

        ModeloRetornoClient.Status = 200;
        ModeloRetornoClient.Erro = false;
        ModeloRetornoClient.Mensagem = "Registro Localizado";

        ModeloRetornoClient.Response = {
            TotalRegistros: Registros.TotalRegistros,
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
