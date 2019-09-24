const libObj = require("../../../../libs/fn_obj");
const libMail = require("../../../../libs/fn_email");
module.exports = req => {
    return new Promise((resolve, reject) => {
        let RetornoClient = libObj.Assign(
            require("../../../modules/ModeloRetornoClient")
        );
        const ModelCadatro = libObj.Assign(require("../ModelCadastro"));
        let r = libObj.Parse(req, ModelCadatro);

        RetornoFunc = (Mensagem, Erro = true) => {
            RetornoClient.Erro = Erro;
            RetornoClient.Mensagem = Mensagem;
            if (Erro === true) {
                RetornoClient.Status = 400;
                return reject(RetornoClient);
            }

            RetornoClient.Status = 200;
            return resolve(RetornoClient);
        };

        if (!req.EmpresaID) return RetornoFunc("Informe :: (EmpresaID)");
        else if (r.EmpresaID === 0)
            return RetornoFunc("O EmpresaID não pode ser 0.");
        else if (!libMail.isEmailValid(r.Email))
            return RetornoFunc("Informe um email válido.");
        else if (r.Nome.length < 2)
            return RetornoFunc("Informe um nome válido");

        nome_array = r.Nome.split(" ");
        if (nome_array.length <= 1)
            return RetornoFunc("Informe o nome completo para o usuário");

        RetornoClient.Response = r;
        return RetornoFunc("Sucesso", false);
    });
};
