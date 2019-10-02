const libObj = require("../../../../libs/fn_obj");
const mongoose = require("mongoose");
// const libDoc = require("../../../../libs/fn_docs");

module.exports = req => {
    return new Promise((resolve, reject) => {
        try {
            let RetornoClient = libObj.Assign(
                require("../../ModeloRetornoClient")
            );

            RetornoFunc = (Mensagem, Erro = true) => {
                RetornoClient.Erro = Erro;
                RetornoClient.Mensagem = Mensagem;
                if (Erro === true) {
                    RetornoClient.Status = 401;
                    return reject(RetornoClient);
                }

                RetornoClient.Status = 200;
                return resolve(RetornoClient);
            };

            let ModelCadatro = libObj.Assign(require("../ModelCadastro"));

            ModelCadatro.KeyClient = "";

            let r = libObj.Parse(req, ModelCadatro);
            r.Token = require("../../sessao/validacao").Execute(r.KeyClient);
            if (r.Token.Erro == true) return RetornoFunc(r.Token.Mensagem);

            if (r.EmpresaID <= 0)
                return RetornoFunc("EmpresaID informado não é válido..");

            if (r._id.length < 5)
                return RetornoFunc("_id informado não é válido..");

            if (!mongoose.Types.ObjectId.isValid(r._id))
                return RetornoFunc("_id informado não é válido..");

            RetornoClient.Response = r;
            return RetornoFunc("Sucesso..", false);
        } catch (error) {
            RetornoClient.Sattus = 500;
            RetornoClient.Erro = false;
            RetornoClient.Mensagem = "Erro Interno";
            RetornoClient.Response = error;
            return resolve(RetornoClient);
        }
    });
};
