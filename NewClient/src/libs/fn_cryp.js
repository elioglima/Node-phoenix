module.exports = object => {
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
