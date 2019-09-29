const libObj = require("../../libs/fn_obj");
const libDate = require("../../libs/fn_date");
const libDoc = require("../../libs/fn_docs");
const config = require("../../config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema(
    {
        EmpresaID: { type: Number },
        Data: { type: Date, default: Date.now },
        Email: { type: String },
        Nome: { type: String },
        TipoPessoaID: { type: Number },
        Doc1: { type: String },
        Doc2: { type: String },
        PSWD: { type: String },
        CategoriaID: { type: Number },
        KeyUser: { type: String }
    },
    { collection: "Usuario" }
);

let Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;

const Find = dados =>
    new Promise(async resolve => {
        const query = Usuario.find(dados);
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

const Todos = Dados =>
    new Promise(async resolve => {
        let where = {};
        if (Dados.EmpresaID && parseInt(Dados.EmpresaID) > 0) {
            where = { EmpresaID: Dados.EmpresaID };
        }

        const query = Usuario.find(where);
        query instanceof mongoose.Query;
        const obj = await query;
        return resolve({ retorno: obj });
    });

const FindId = Dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: Dados.EmpresaID,
            _id: Dados._id.toString()
        });
        query instanceof mongoose.Query;
        const obj = await query;
        return resolve({ retorno: obj });
    });

module.exports.Editar = dados =>
    new Promise(async resolve => {
        return await Usuario.findById(dados._id, function(err, doc) {
            if (err)
                return resolve({
                    RetornoMetodo: { Erro: true, Response: err }
                });

            let DadosAr = Object.keys(dados);
            for (let iDadosAr = 0; iDadosAr < DadosAr.length; iDadosAr++) {
                const element = DadosAr[iDadosAr];
                doc[element] = dados[element];
            }

            doc.save()
                .then(resultado =>
                    resolve({
                        RetornoMetodo: { Erro: false, Response: resultado }
                    })
                )
                .catch(err =>
                    resolve({ RetornoMetodo: { Erro: true, Response: err } })
                );
        });
    });

module.exports.ApagarID = _id =>
    new Promise(async resolve => {
        let { retorno } = await FindId(_id);
        if (!retorno || retorno.length === 0)
            return resolve({
                RetornoMetodo: {
                    Erro: true,
                    Response: "Registro não existe ::: " + _id + "."
                }
            });

        return await Usuario.findByIdAndDelete(_id)
            .exec()
            .then(async resultado => {
                if (resultado === null)
                    return resolve({
                        RetornoMetodo: {
                            Erro: true,
                            Response: "Registro não existe ::: " + _id + "."
                        }
                    });

                // let { retorno } = await FindId(_id)
                // if ((retorno) || (retorno.length > 0))
                //     return resolve({RetornoMetodo: {
                //                         Erro:true,
                //                         Response:'Não foi possível remover o registro ::: ' + _id + '.'
                //                     }})

                return resolve({
                    RetornoMetodo: {
                        Erro: false,
                        Response: "Registro removido com sucesso."
                    }
                });
            })
            .catch(err =>
                resolve({
                    RetornoMetodo: {
                        Erro: true,
                        Response: err
                    }
                })
            );
    });

module.exports.FindCPF = Dados =>
    Find({
        EmpresaID: Dados.EmpresaID,
        Doc1: Dados.Doc1
    });

module.exports.LikeCPF = Dados =>
    Find({
        EmpresaID: Dados.EmpresaID,
        Doc1: new RegExp(Dados.Numero, "i")
    });

const FindNome = Dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: Dados.EmpresaID,
            Nome: Dados.Nome
        });
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

const LikeNome = dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: dados.EmpresaID,
            Nome: new RegExp(dados.nome, "i")
        });
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

const FindMail = Dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: Dados.EmpresaID,
            Email: Dados.Email
        });
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

const LikeMail = dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: dados.EmpresaID,
            Email: new RegExp(dados.Email, "i")
        });
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

Novo = dados =>
    new Promise(async resolve => {
        delete dados._id;
        const model = new Usuario(dados);
        return await model
            .save()
            .then(resultado =>
                resolve({ RetornoMetodo: { Erro: false, Response: resultado } })
            )
            .catch(err =>
                resolve({ RetornoMetodo: { Erro: true, Response: err } })
            );
    });

CreateKeyUser = u => {
    let obj = {
        _id: u._id.toString(),
        EmpresaID: u.EmpresaID,
        Data: u.Data,
        PSWD: u.PSWD
    };

    let r = require("../../libs/fn_cryp").Encode(obj);
    u.KeyUser = r.Resultado;
};

const CreateDemo = async () => {
    let usr = {
        _id: mongoose.Types.ObjectId("5d8a637700f1a940aed98fb3"),
        EmpresaID: 1,
        Data: new Date(),
        PSWD: require("../../libs/fn_hash").sha256("123"),
        Email: "diretor.sis@gmail.com",
        Nome: "Elio de Lima",
        TipoPessoaID: 0,
        Doc1: "216.399.218-77",
        Doc2: "321.166.631-8",
        CategoriaID: 0
    };

    CreateKeyUser(usr);

    await Novo(usr)
        .then(res => console.log("resultado create demo", res))
        .catch(res => console.log("erro create demo", res));
};

FindLogar = dados =>
    new Promise(async resolve => {
        const query = Usuario.find({
            EmpresaID: dados.EmpresaID,
            Doc1: dados.Doc1,
            PSWD: dados.PSWD
        });
        query instanceof mongoose.Query;
        const docs = await query;
        return resolve({ retorno: docs });
    });

module.exports.FindId = FindId;
module.exports.Todos = Dados => Todos(Dados);
module.exports.FindLogar = Dados => FindLogar(Dados);
module.exports.FindNome = Dados => FindNome(Dados);
module.exports.LikeNome = Dados => LikeNome(Dados);
module.exports.FindMail = Dados => FindMail(Dados);
module.exports.LikeMail = Dados => LikeMail(Dados);
module.exports.Novo = () => Novo();
module.exports.CreateDemo = () => CreateDemo();
