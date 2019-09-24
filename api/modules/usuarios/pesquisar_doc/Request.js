const libObj = require("../../../../libs/fn_obj");
// const libDoc = require("../../../../libs/fn_docs");

module.exports = req => {
    return new Promise((resolve, reject) => {
        let RetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));
        let ModelCadatro = {
            EmpresaID: 0,
            Metodo: "",
            Numero: ""
        };

        let r = libObj.Parse(req, ModelCadatro);
        if (r.EmpresaID <= 0) {
            RetornoClient.Erro = false;
            RetornoClient.Mensagem = "Informe :: (EmpresaID)";
            return reject(RetornoClient);
        } else if (!r.Numero) {
            RetornoClient.Erro = true;
            RetornoClient.Mensagem = "Informe :: (Numero)";
            return reject(RetornoClient);
        }

        RetornoClient.Erro = false;
        RetornoClient.Mensagem = "Sucesso";
        RetornoClient.Response = r;
        return resolve(RetornoClient);
    });
};
