module.exports = token_str => {
    let Obj = require("../../libs/fn_cryp")(token_str);
    if (Obj.Erro == true) {
        return {
            Erro: Obj.Erro,
            Mensagem: Obj.Mensagem,
            Resultado: {}
        };
    }

    let Validade = require("moment")(Obj.Resultado.Validade);
    let Hoje = require("moment")(new Date());
    let iDiff = parseInt(Hoje.diff(Validade, "minutes"));
    Obj.Resultado.Expirou = iDiff >= 0;
    return {
        Erro: Obj.Erro,
        Mensagem: "Token decodificado com sucesso.",
        Resultado: Obj.Resultado
    };
};
