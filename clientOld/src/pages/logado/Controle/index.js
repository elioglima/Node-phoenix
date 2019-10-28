import React, { Component } from "react";
import MenuItem from "./components/MenuItem";
import BotaoSairSistema from "./components/BotaoSairSistema";
import Header from "./components/Header";
import LogoDev from "../../components/LogoDev";
import RelogioDisplay from "./components/RelogioDisplay";
import RenderBody from "./bodys";
import { LogoEmpresa } from "./css/styled";
import "./css/styles.css";

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
            Perfil: {},
            HeaderPesquisaInputValue:'',
            StateKeyPesquisa: false,
            StateKeyPesquisaDblClick: false
        };
    }

    componentDidMount = () => {
        let KeyClient = localStorage.getItem("KeyClient");
        if (KeyClient == "undefined") {
            return this.props.dispSair();
        } else if (!KeyClient) {
            return this.props.dispSair();
        } else if (KeyClient.length == 0) {
            return this.props.dispSair();
        }

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

        this.setState({
            Perfil: TKC.Resultado.Dados.Usr
        });
    };
    
    onPesquisarKey = value => {
        this.setState({
            StateKeyPesquisa: value
        });
        this.setStatePesquisa(true)
    };

    onChangeHeaderPesquisaInput = (value) => {
        this.setState({
            HeaderPesquisaInputValue: value
        });
    }

    onDoubleDblClickSetStatePesquisa = value => {
        /* 
            muda stato da variavel indicadora de status de click
            do btPesquisa para decisoes e ações
        */
        
       this.setStatePesquisa(value)
    }
    
    setStatePesquisa = (value) => {
        this.setState({
            StateKeyPesquisaDblClick: value
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="sidebar">
                        <div className="ItensMenu">
                            <RelogioDisplay />
                            {this.props.Menus.map((menu, key) => {
                                return (
                                    <MenuItem
                                        key={'MenuItem' + key}
                                        {...this.props}
                                        {...this.state}
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
                        <Header
                            {...this.props}
                            {...this.state}
                            onChangeHeaderPesquisaInput={this.onChangeHeaderPesquisaInput.bind()}
                            onPesquisarKey={this.onPesquisarKey.bind()}
                            onDoubleDblClickSetStatePesquisa={this.onDoubleDblClickSetStatePesquisa.bind()}
                        />   

                        <div className="base-container-body-scrool">
                            <RenderBody
                                {...this.props}
                                {...this.state}
                                onSelecionaPagina={this.onSelecionaPagina}
                                onPesquisarKey={this.onPesquisarKey.bind()}
                                onDoubleDblClickSetStatePesquisa={this.onDoubleDblClickSetStatePesquisa.bind()}
                                setStatePesquisa={this.setStatePesquisa.bind()}
                                onChangeHeaderPesquisaInput={this.onChangeHeaderPesquisaInput.bind()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Objeto;
