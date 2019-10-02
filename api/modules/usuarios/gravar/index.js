const Request = require("./Request");
const Response = require("./Response");

module.exports = (req, res) => {
    console.log("Route usuarios/gravar");

    Request(req.body)
        .then(
            (dados = async dados => {
                res.status(200).json(await Response(dados.Response));
            })
        )
        .catch(dados => {
            res.status(500).json(dados);
        });
};
