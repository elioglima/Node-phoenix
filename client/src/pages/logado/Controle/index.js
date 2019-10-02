import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/styles.css";
import IcoClose from "./components/IcoClose";
import MenuItem from "./components/MenuItem";
import BotaoSairSistema from "./components/BotaoSairSistema";
import Header from "./components/Header";
import LogoDev from "../../components/LogoDev";
import {
    LogoEmpresa,
    RELOGIO,
    RELOGIO_ICONE,
    RELOGIO_TITULO
} from "./css/styled";
import RenderBody from "./bodys";

class Objeto extends Component {

    constructor(props) {
        super(props);
        let d = new Date();
        let day = parseInt(d.getDay());
        let month = parseInt(d.getMonth());
        let date = parseInt(d.getDate());
        let year = parseInt(d.getFullYear());
        let time = d.toLocaleTimeString();

        if (day <= 9) day = "0" + day;
        if (month <= 9) month = "0" + month;
        if (date <= 9) date = "0" + date;

        this.state = {
            pagina: 1,
            SelectFieldValue: 0,
            SelectFieldMsgErro: "",
            EmailCadastroFieldValue: 0,
            EmailCadastroMsgErro: "",
            BotaoContinuarMsgErro: "",
            Perfil: {},

            day,
            month,
            date,
            year,
            time,
            data_exibicao: day + "/" + month + "/" + year + " " + time,

            HeaderPesquisaInputValue:'',
            StateKeyPesquisa: false,
            StateKeyPesquisaDblClick: false
        };

        this.countingSecond = this.countingSecond.bind(this);
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

        this.timeout = setInterval(this.countingSecond, 1000);
    };

    countingSecond() {
        let d = new Date();
        let day = parseInt(d.getDay());
        let month = parseInt(d.getMonth());
        let date = parseInt(d.getDate());
        let year = parseInt(d.getFullYear());
        let time = d.toLocaleTimeString();

        if (day <= 9) day = "0" + day;
        if (month <= 9) month = "0" + month;
        if (date <= 9) date = "0" + date;
        this.setState({
            day,
            month,
            date,
            year,
            time,
            data_exibicao:
                this.state.day +
                "/" +
                this.state.month +
                "/" +
                this.state.year +
                " " +
                this.state.time
        });
    }

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
        console.log('click', value)
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
                            <RELOGIO>
                                <RELOGIO_ICONE
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/icones/ico_relogio.svg"
                                    }
                                />{" "}
                                <RELOGIO_TITULO>
                                    {this.state.data_exibicao}
                                </RELOGIO_TITULO>
                            </RELOGIO>

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
        );
    }
}

export default Objeto;
