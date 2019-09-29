GTK = dados => {
    let obj_token = {};
    obj_token.Dados = dados;
    obj_token.Data = new Date();
    obj_token.Validade = require("moment")(new Date())
        .add(30, "m")
        .toDate();

    let Obj = require("../../../libs/fn_cryp").Encode(obj_token);
    return {
        Erro: Obj.Erro,
        Mensagem: Obj.Erro == false ? "Token gerado com sucesso" : Obj.Mensagem,
        Resultado: Obj.Resultado
    };
};

DTK = token_str => {
    let Obj = require("../../../libs/fn_cryp").Decode(token_str);
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

module.exports.GTK = GTK;
module.exports.DTK = DTK;

// console.log("inicio");
// let token = GTk({});
// let token_obj = DCT(token.Resultado);
// console.log(token_obj);
