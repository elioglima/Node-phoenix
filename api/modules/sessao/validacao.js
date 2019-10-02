module.exports.Execute = KeyClient => {
    // valida tolen recebido

    let RetornoClient = {
        Erro: true,
        Mensagem: "Client não autorizado :: 5002"
    };

    if (!KeyClient) {
        RetornoClient.Mensagem = "Token inválido.";
        return RetornoClient;
    } else if (KeyClient == "undefined") {
        RetornoClient.Mensagem = "Token inválido.";
        return RetornoClient;
    } else if (KeyClient == undefined) {
        RetornoClient.Mensagem = "Token inválido.";
        return RetornoClient;
    }

    Token = require("./token").DTK(KeyClient);

    if (!Token) {
        RetornoClient.Mensagem = "Token inválido.";
        return RetornoClient;
    }

    if (Token.Erro == true) return RetornoClient;

    if (Token.Resultado == true) {
        RetornoClient.Mensagem = "Token expirou.";
        return RetornoClient;
    }

    RetornoClient.Erro = false;
    RetornoClient.Mensagem = Token.Mensagem;
    RetornoClient.Resultado = Token.Resultado;
    return RetornoClient;
};
