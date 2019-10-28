import React, { Component } from "react";
import TextField from "../../../../../components/html/TextField";
import libDate from "../../../../../../libs/fn_date";
import { BASE_CAD, TITULO, TITULO_LABEL, TITULO_BOTOES, REGISTROS } from "./css/styled";
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

        let { retornoMetoto } = await this.props.dispRAPI("/usuarios/gravar",data);
        console.log("Resultado do metodo gravar", data, retornoMetoto);
    };

    onChangeInput = (e, retorno) => {
        if (!retorno) return
        return this.setState({[retorno.nome]: retorno.valor})
    }

    render() {
        return (
            <BASE_CAD>
                <TITULO>
                    <TITULO_LABEL>Cadastro de Usuários</TITULO_LABEL>
                    <TITULO_BOTOES><span onClick={e => this.onClickGravar()}>Gravar</span></TITULO_BOTOES>
                </TITULO>
                <REGISTROS>
                    <TextField type="text" nome={'_id'} titulo="Código" valor={this.state._id}/>
                    <TextField type="text" nome={'Data'} titulo="Data Cadastro" valor={libDate.FormatDateTime("dd/mm/yyyy",libDate.ParseStrToDate(this.state.Data))} onChange={this.onChangeInput.bind()} />
                    <TextField type="text" nome={'Nome'} titulo="Nome Completo" valor={this.state.Nome} onChange={this.onChangeInput.bind()} />
                    <TextField type="text" nome={'Doc1'} titulo="Doc1" valor={this.state.Doc1} onChange={this.onChangeInput.bind()} />
                    <TextField type="text" nome={'Doc2'} titulo="Doc2" valor={this.state.Doc2} onChange={this.onChangeInput.bind()} />
                    <TextField type="text" nome={'email'} titulo="email" valor={this.state.Doc2} onChange={this.onChangeInput.bind()} />
                    <TextField type="text" nome={'Nick'} titulo="Nick" valor={this.state.Nick}/>
                </REGISTROS>
            </BASE_CAD>
        );
    }
}
