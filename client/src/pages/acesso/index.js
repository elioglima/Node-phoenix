import React, { Component } from "react";
import { connect } from "react-redux";
import config from "../../config";
import * as Actions from "./actions/actions";
import libEmail from "../../libs/fn_email";
import "./css/styles.css";

import Passo01 from "./Passo01";
import Passo02 from "./Passo02";
import { timingSafeEqual } from "crypto";

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 1,
            EmpresaIDFieldValue: 1,
            SelectFieldMsgErro: "",
            DocCadastroFieldValue: "",
            PSWDCadastroFieldValue: "",
            PSWDCadastroFieldErro: "",
            DocCadastroMsgErro: "",
            BotaoContinuarMsgErro: "",
            DocCadastroFieldInvalido: true,
            KeyClient: ""
        };

        let KeyClient = localStorage.getItem("KeyClient");
        if (KeyClient.length > 0) {
            let TKC = require("../src/token")(KeyClient);
            if (TKC.Erro) {
                localStorage.setItem("KeyClient", "");
            } else if (TKC.Expirou == true) {
                localStorage.setItem("KeyClient", "");
            } else if (!TKC.Resultado.Dados) {
                localStorage.setItem("KeyClient", "");
            } else if (!TKC.Resultado.Dados.Logado) {
                localStorage.setItem("KeyClient", "");
            }
            console.log(TKC);
            if (TKC.Resultado.Dados.Logado == true) {
                return this.props.dispPainelControle();
            }
        }
    }

    componentDidMount = () => {
        console.log("ok", this.state.EmpresaIDFieldValue);
    };

    ProximaPagina = async (e, iPagina) => {
        let KeyClient = "";
        this.setState({
            SelectFieldMsgErro: "",
            DocCadastroMsgErro: ""
        });

        if (
            (this.state.pagina === 1 && iPagina === 2) ||
            (this.state.pagina === 2 && iPagina === 3)
        ) {
            if (this.state.EmpresaIDFieldValue === 0) {
                return this.setState({
                    SelectFieldMsgErro: "Informe o tipo de acesso"
                });
            } else if (this.state.DocCadastroFieldInvalido === true) {
                return this.setState({
                    DocCadastroMsgErro: "Documento Inálido."
                });
            }

            let url = "";
            let DataSend = {};

            if (iPagina === 2) {
                url = "acesso/doc";
                DataSend = {
                    EmpresaID: this.state.EmpresaIDFieldValue,
                    Documento: this.state.DocCadastroFieldValue
                };
            } else if (iPagina === 3) {
                url = "acesso/logar";
                if (this.state.PSWDCadastroFieldValue.length === 0) {
                    return this.setState({
                        PSWDCadastroFieldErro: "Informe a Senha"
                    });
                }

                DataSend = {
                    EmpresaID: this.state.EmpresaIDFieldValue,
                    Documento: this.state.DocCadastroFieldValue,
                    PSWD: require("../../libs/fn_hash").sha256(
                        this.state.PSWDCadastroFieldValue
                    ),
                    KeyClient: this.state.KeyClient
                };
            }

            let { retornoMetoto } = await this.props.dispRAPI(url, DataSend);
            if (retornoMetoto.Status != 200) {
                this.setState({
                    BotaoContinuarMsgErro: retornoMetoto.Mensagem
                });
                return;
            } else if (retornoMetoto.Erro == true) {
                return this.setState({
                    BotaoContinuarMsgErro: "Ops, aconteceu um erro interno."
                });
            }

            this.setState({
                BotaoContinuarMsgErro: retornoMetoto.Mensagem
            });

            if (iPagina == 2) {
                if (retornoMetoto.Response.TotalRegistros != 1) {
                    this.setState({
                        BotaoContinuarMsgErro: "Documento não localizado."
                    });
                    return;
                }
            }

            KeyClient = retornoMetoto.Response.KeyClient;
            localStorage.setItem("KeyClient", KeyClient);
        }
        if (iPagina === 3) {
            return this.props.dispPainelControle();
        }
        this.setState({
            pagina: iPagina,
            BotaoContinuarMsgErro: "",
            KeyClient
        });
    };

    OnChangeSelectField = value => {
        this.setState({ EmpresaIDFieldValue: value });
    };

    OnChangeChangeDocs = retorno =>
        this.setState({
            DocCadastroFieldInvalido: retorno.erro,
            DocCadastroFieldValue: retorno.valor
        });

    OnChangeChangePSWD = retorno =>
        this.setState({
            PSWDCadastroFieldErro: retorno.erro,
            PSWDCadastroFieldValue: retorno.valor
        });

    render() {
        return (
            <div>
                <div className="base-login">
                    {(() => {
                        if (this.state.pagina === 1) {
                            return (
                                <Passo01
                                    {...this.state}
                                    ProximaPagina={this.ProximaPagina.bind()}
                                    OnChangeSelectField={this.OnChangeSelectField.bind()}
                                    OnChangeChangeDocs={this.OnChangeChangeDocs.bind()}
                                />
                            );
                        } else if (this.state.pagina === 2) {
                            return (
                                <Passo02
                                    {...this.state}
                                    ProximaPagina={this.ProximaPagina.bind()}
                                    OnChangeChangePSWD={this.OnChangeChangePSWD.bind()}
                                />
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    Actions
)(Objeto);
