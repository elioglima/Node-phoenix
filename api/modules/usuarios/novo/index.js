const Request = require("./Request");
const Response = require("./Response");

module.exports = (req, res) => {
    console.log(req);
    Request(req.body)
        .then(
            (dados = async Dados => {
                res.status(200).json(await Response(Dados.Response));
            })
        )
        .catch(Dados => {
            res.status(200).json(Dados);
        });
};
