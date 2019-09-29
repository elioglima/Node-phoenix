import React, { Component } from "react";
import { connect } from "react-redux";
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
        console.log(this.props);
        let KeyClient = localStorage.getItem("KeyClient");
        if (KeyClient.length > 0) {
            let TKC = require("../../src/token")(KeyClient);
            if (TKC.Erro) {
                localStorage.setItem("KeyClient", "");
            } else if (TKC.Resultado.Expirou == true) {
                localStorage.setItem("KeyClient", "");
            } else if (!TKC.Resultado.Dados) {
                this.props.dispSair();
            } else if (!TKC.Resultado.Dados.Logado) {
                this.props.dispSair();
            }

            this.setState({ Perfil: TKC.Resultado.Dados.Usr });
        } else {
            this.props.dispSair();
        }
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="sidebar">
                        <div className="divisor1"></div>
                        <div className="ItensMenu">
                            {this.props.Menus.map(menu => {
                                return (
                                    <MenuItem
                                        titulo={menu.Titulo}
                                        modelo={menu.Modelo}
                                        ativo={menu.Ativo}
                                    />
                                );
                            })}
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

export default Objeto;
