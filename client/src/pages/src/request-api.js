export const RAPI = (uri, params) => {
    return new Promise(function(resolve, reject) {
        const URLS = "http://localhost:5225" + "/api/" + uri;
        const request = require("request");
        const base64 = require("base-64");

        let retorno = {
            Status: 0,
            Erro: false,
            Mensagem: "",
            Response: {}
        };

        const retornoMetodo = (Body, Mensagem, Status = 200, Erro = false) => {
            retorno.Status = Status;
            retorno.Mensagem = Mensagem;
            retorno.Response = Body;
            retorno.Erro = Erro;

            if (Status != 200) {
                retorno.Erro = true;
            }

            return resolve({ retornoMetoto: retorno });
        };

        try {
            const options = {
                url: URLS,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    Accept: "*/*",
                    "User-Agent": "PostmanRuntime/7.15.2",
                    "BaxEnd-Token": process.env.REACT_APP_KPP
                },
                json: true,
                body: params
            };

            request(options, (err, response, body) => {
                if (err || response.statusCode == 404) {
                    return retornoMetodo(
                        "Servidor Offiline",
                        "Servidor Offiline",
                        404
                    );
                }

                if (!response) {
                    return retornoMetodo(
                        body.Response,
                        "Servidor Offiline",
                        404
                    );
                }

                if (response.statusCode !== 200) {
                    return retornoMetodo(
                        body.Response,
                        response.Mensagem,
                        response.statusCode,
                        response.Erro
                    );
                }
                return retornoMetodo(body.Response, body.Mensagem, body.Status);
            });
        } catch (error) {
            return retornoMetodo(error, "Erro interno", 500);
        }
    });
};
