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
                Documento: "",
                PSWD: "",
                KeyClient: "",
                Token: ""
            };

            let r = libObj.Parse(req, ModelCadatro);

            if (r.KeyClient.length === 0) {
                RetornoClient.Erro = true;
                RetornoClient.Mensagem = "Client não autorizado :: 5001";
                return resolve(RetornoClient);
            }

            r.Token = require("../../sessao/token").DTK(r.KeyClient);
            if (r.Token.Erro == true) {
                RetornoClient.Erro = true;
                RetornoClient.Mensagem = "Client não autorizado :: 5002";
                return resolve(RetornoClient);
            }

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

            if (r.PSWD.length === 0) {
                RetornoClient.Erro = true;
                RetornoClient.Mensagem = "Informe :: (PSWD)";
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
            RetornoClient.Mensagem = "Erro Interno";
            RetornoClient.Response = error;
            return reject(RetornoClient);
        }
    });
};
