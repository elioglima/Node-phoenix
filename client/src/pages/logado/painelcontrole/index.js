import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import "./css/styles.css";
import IcoClose from "./components/IcoClose";
import MenuItem from "./components/MenuItem";
import BotaoSairSistema from "./components/BotaoSairSistema";
import Header from "./components/Header";
import LogoDev from "../../components/LogoDev";
import { LogoEmpresa } from "./css/styled";

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 1,
            SelectFieldValue: 0,
            SelectFieldMsgErro: "",
            EmailCadastroFieldValue: 0,
            EmailCadastroMsgErro: "",
            BotaoContinuarMsgErro: "",
            Perfil: {}
        };
    }

    componentDidMount = () => {
        let KeyClient = localStorage.getItem("KeyClient");
        if (KeyClient.length > 0) {
            let TKC = require("../../src/token")(KeyClient);
            if (TKC.Erro) {
                localStorage.setItem("KeyClient", "");
            } else if (TKC.Expirou == true) {
                localStorage.setItem("KeyClient", "");
            }

            this.setState({ Perfil: TKC.Resultado.Dados.Usr });
            console.log(TKC.Resultado.Dados.Usr);
        }
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="sidebar">
                        <div className="divisor1"></div>
                        <div className="ItensMenu">
                            <MenuItem
                                titulo={"Painel de Controls"}
                                modelo={0}
                            />
                            <MenuItem
                                titulo={"Gerenciador de Tarefas"}
                                modelo={1}
                            />
                            <MenuItem
                                titulo={"Mensagens"}
                                ativo={true}
                                modelo={2}
                            />
                            <MenuItem titulo={"Contatos"} modelo={3} />
                            <MenuItem titulo={"Atendimento"} modelo={4} />
                        </div>
                        <div className="Configuracoes"></div>

                        <LogoEmpresa
                            src={
                                process.env.PUBLIC_URL +
                                "images/logo_empresa.svg"
                            }
                        />
                        <BotaoSairSistema
                            titulo={"Sair do Sistema"}
                            onClick={this.props.dispSair}
                        />
                        <LogoDev />
                    </div>

                    <div className="base-container">
                        <Header />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    Actions
)(Objeto);
