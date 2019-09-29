const libObj = require("../../../../libs/fn_obj");
// const libDoc = require("../../../../libs/fn_docs");

module.exports = req => {
    return new Promise((resolve, reject) => {
        try {
            let RetornoClient = libObj.Assign(
                require("../../ModeloRetornoClient")
            );

            RetornoClient.Sattus = 401;

            let ModelCadatro = {
                EmpresaID: 0,
                Documento: ""
            };

            let r = libObj.Parse(req, ModelCadatro);
            if (r.EmpresaID <= 0) {
                RetornoClient.Erro = true;
                RetornoClient.Mensagem = "Informe :: (EmpresaID)";
                return resolve(RetornoClient);
            }

            if (!r.Documento.length === 0) {
                RetornoClient.Erro = true;
                RetornoClient.Mensagem = "Informe :: (Documento)";
                return resolve(RetornoClient);
            }

            RetornoClient.Sattus = 200;
            RetornoClient.Erro = false;
            RetornoClient.Mensagem = "Sucesso";
            RetornoClient.Response = r;
            return resolve(RetornoClient);
        } catch (error) {
            RetornoClient.Sattus = 500;
            RetornoClient.Erro = false;
            RetornoClient.Mensagem =
                "Erro Interno - Validação dos parametros de entrada.";
            RetornoClient.Response = error;
            return reject(RetornoClient);
        }
    });
};
