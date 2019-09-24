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
            EmpresaIDFieldValue: 0,
            SelectFieldMsgErro: "",
            DocCadastroFieldValue: "",
            PWSACadastroFieldValue: "",
            EmailCadastroMsgErro: "",
            BotaoContinuarMsgErro: "",
            DocCadastroFieldInvalido: false
        };
    }

    ProximaPagina = async (e, iPagina) => {
        this.setState({
            SelectFieldMsgErro: "",
            EmailCadastroMsgErro: ""
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
                    EmailCadastroMsgErro: "Documento Inálido."
                });
            }

            let url = "";
            let DataSend = {};

            console.log(this.state.EmpresaIDFieldValue);
            if (iPagina === 2) {
                url = "usuarios/pesquisar/doc";
                DataSend = {
                    EmpresaID: this.state.EmpresaIDFieldValue,
                    Numero: this.state.DocCadastroFieldValue
                };
            } else if (iPagina === 3) {
                url = "usuarios/pesquisar/acesso";
                DataSend = {
                    EmpresaID: this.state.EmpresaIDFieldValue,
                    Numero: this.state.DocCadastroFieldValue,
                    PWSA: this.state.PWSACadastroFieldValue
                };
            }

            let { retornoMetoto } = await this.props.dispRAPI(url, DataSend);
            if (retornoMetoto.Status != 200) {
                this.setState({
                    BotaoContinuarMsgErro: retornoMetoto.Mensagem
                });
                return;
            }

            if (retornoMetoto.Erro == true) {
                this.setState({
                    BotaoContinuarMsgErro: "Ops, aconteceu um erro interno."
                });
            }
            this.setState({
                BotaoContinuarMsgErro: retornoMetoto.Mensagem
            });

            if (retornoMetoto.Response.TotalRegistros != 1) {
                this.setState({
                    BotaoContinuarMsgErro:
                        "Ops, não foi possível localizar o e-mail."
                });
            }

            if (iPagina === 3) {
                return this.props.dispPainelControle();
            }
        }

        this.setState({
            pagina: iPagina,
            BotaoContinuarMsgErro: ""
        });
    };

    OnChangeSelectField = EmpresaIDFieldValue => {
        this.setState({ EmpresaIDFieldValue: EmpresaIDFieldValue.value });
    };

    OnChangeChangeDocs = retorno =>
        this.setState({
            DocCadastroFieldInvalido: retorno.erro,
            DocCadastroFieldValue: retorno.valor
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
                                    ProximaPagina={this.ProximaPagina.bind()}
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
