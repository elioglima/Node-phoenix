encode = object => {
    const base64 = require("base-64");
    let objJson;

    if (typeof object == "object") {
        objJson = JSON.stringify(object);
    } else objJson = object;

    let strb64 = base64.encode(objJson);
    let composto = [];
    let i = 0;
    for (let index = strb64.length - 1; index >= 0; index--) {
        let character = strb64[index];
        composto[i] = base64.encode(
            (character.charCodeAt(0) * 2 + 2).toString()
        );
        i++;
    }

    let resultado = base64.encode(JSON.stringify(composto));

    return {
        Erro: false,
        Mensagem: "Codificação efetuada com sucesso",
        Resultado: resultado
    };
};

decode = object => {
    const base64 = require("base-64");
    let objJson;

    if (typeof object != "string") {
        return {
            Erro: false,
            Mensagem: "Parametro a ser informado tem que ser string",
            Resultado: resultado
        };
    }

    let sTemp = base64.decode(object);
    let json = JSON.parse(sTemp);

    let composto = "";
    let i = 0;
    for (let index = json.length - 1; index >= 0; index--) {
        let character = json[index];
        composto += String.fromCharCode(
            (parseFloat(base64.decode(character)) - 2) / 2
        );
        i++;
    }

    let resultado = base64.decode(composto);

    return {
        Erro: false,
        Mensagem: "Codificação efetuada com sucesso",
        Resultado: JSON.parse(resultado)
    };
};

module.exports.Encode = input => encode(input);
module.exports.Decode = input => decode(input);

// let json = { teste: "teste" };
// let sencode = encode(json);
// let sdecode = decode(sencode.Resultado);
// console.log(json, sencode.Resultado, sdecode.Resultado);
