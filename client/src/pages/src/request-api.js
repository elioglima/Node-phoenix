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
            
            let KeyClient = localStorage.getItem("KeyClient");
            if (KeyClient != "undefined" && KeyClient)
                if (KeyClient.length > 0) {
                    params["KeyClient"] = KeyClient;
                }

            if (!params.EmpresaID) {
                params["EmpresaID"] = localStorage.getItem("EmpresaID");
            }

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
                console.log("retorno");

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
                console.log("localstorage");
                if (
                    body.Response.KeyClient &&
                    body.Response.KeyClient.length > 0
                ) {
                    localStorage.setItem("KeyClient", body.Response.KeyClient);
                }

                return retornoMetodo(body.Response, body.Mensagem, body.Status);
            });
        } catch (error) {
            return retornoMetodo(error, "Erro interno", 500);
        }
    });
};
