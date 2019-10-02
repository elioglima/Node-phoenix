import React, { Component } from "react";
import { TextField } from "../../../../../components/html/css/TextField/styled";
import libDate from "../../../../../../libs/fn_date";

import {
    GRUPO_MENU,
    GRUPO_MENU_TITULO,
    GRUPO_MENU_ICONES,
    MENU_ACESSO,
    MENU_ACESSO_IMG,
    MENU_BASE,
    MENU_TITULO,
    MENU_DESC,
    MENU_REGS,
    GRUPO_MENU_TITULO_LABEL,
    GRUPO_MENU_TITULO_BOTOES,
    DIV_BLOCO
} from "./css/styled";
import moment from "moment";

export default class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: ""
        };
        this.LoadDados();
    }

    componentDidMount() {
        this.LoadDados();
    }

    LoadDados = async () => {
        if (this.props.status_pagina == "EDITAR") {
            let { retornoMetoto } = await this.props.dispRAPI(
                "/usuarios/pesquisar/codigo",
                { _id: this.props.id_selecionado }
            );

            this.setState(retornoMetoto.Response.Registros[0]);
        }
    };

    onClickGravar = async () => {
        let data = {};
        data.Metodo = this.props.status_pagina;
        data._id = this.props.id_selecionado;
        data.Data = moment();
        data.Nome = this.state.Nome;
        data.Doc1 = this.state.Doc1;
        data.Doc2 = this.state.Doc2;
        data.Email = this.state.Email;
        data.Nick = this.state.Nick;

        let { retornoMetoto } = await this.props.dispRAPI(
            "/usuarios/gravar",
            data
        );

        console.log("Resultado de gravat", data, retornoMetoto);
    };

    render() {
        return (
            <GRUPO_MENU>
                <GRUPO_MENU_TITULO>
                    <GRUPO_MENU_TITULO_LABEL>
                        Cadastro de Usuários
                    </GRUPO_MENU_TITULO_LABEL>
                    <GRUPO_MENU_TITULO_BOTOES>
                        <span onClick={e => this.onClickGravar()}>Gravar</span>
                    </GRUPO_MENU_TITULO_BOTOES>
                </GRUPO_MENU_TITULO>
                <GRUPO_MENU_ICONES>
                    <DIV_BLOCO width={"15%"}>
                        <label>Código</label>
                        <TextField type="text" value={this.state._id} />
                    </DIV_BLOCO>
                    <DIV_BLOCO width="10%">
                        <label>Data Cadastro</label>
                        <TextField
                            value={libDate.FormatDateTime(
                                "dd/mm/yyyy",
                                libDate.ParseStrToDate(this.state.Data)
                            )}
                        />
                    </DIV_BLOCO>
                    <DIV_BLOCO>
                        <label>Nome Completo</label>
                        <TextField
                            type="text"
                            value={this.state.Nome}
                            onChange={e => {
                                this, this.setState({ Nome: e.target.value });
                            }}
                        />
                    </DIV_BLOCO>
                    <DIV_BLOCO>
                        <label>CPF/ CNPJ</label>
                        <TextField
                            type="text"
                            value={this.state.Doc1}
                            onChange={e => {
                                this, this.setState({ Doc1: e.target.value });
                            }}
                        />
                    </DIV_BLOCO>
                    <DIV_BLOCO>
                        <label>CPF/ CNPJ</label>
                        <TextField
                            type="text"
                            value={this.state.Doc2}
                            onChange={e => {
                                this, this.setState({ Doc2: e.target.value });
                            }}
                        />
                    </DIV_BLOCO>

                    <DIV_BLOCO>
                        <label>E-Mail</label>
                        <TextField
                            type="text"
                            value={this.state.Email}
                            onChange={e => {
                                this, this.setState({ Email: e.target.value });
                            }}
                        />
                    </DIV_BLOCO>

                    <DIV_BLOCO>
                        <label>Nick</label>
                        <TextField
                            type="text"
                            value={this.state.Nick}
                            onChange={e => {
                                this, this.setState({ Nick: e.target.value });
                            }}
                        />
                    </DIV_BLOCO>
                </GRUPO_MENU_ICONES>
            </GRUPO_MENU>
        );
    }
}
