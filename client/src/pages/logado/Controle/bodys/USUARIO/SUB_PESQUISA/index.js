import React, { Component } from "react";
import { push } from "connected-react-router";

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
    GRUPO_MENU_TITULO_BOTOES
} from "./css/styled";
import { get } from "https";

const Menus = [
    {
        Titulo: "Lista de Usuários",
        Itens: [
            {
                Id: "5d8ca4815d54e75bb14a18ac",
                Nome: "Elio Lima",
                Atualizado: "20, Agosto de 2019",
                Documento: "216.399.218-77",
                Email: "diretor.sis@gmail.com"
            }
        ]
    }
];

export default class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Registros: [],
            TotalRegistros: 0
        };
    }

    componentDidUpdate() {
        if (this.props.StateKeyPesquisa == true) {
            this.props.onPesquisarKey(false);
            this.LoadPesquisa();
        }
    }

    componentDidMount() {
        this.LoadPesquisa();
    }

    getMenu = usuario => {
        return (
            <MENU_ACESSO onClick={e => this.props.onClickEditar(usuario._id)}>
                <MENU_BASE>
                    <MENU_TITULO>{usuario.Nome}</MENU_TITULO>
                    <MENU_DESC>{usuario.Doc1}</MENU_DESC>
                    <MENU_DESC>{usuario.Email}</MENU_DESC>
                </MENU_BASE>
            </MENU_ACESSO>
        );
    };

    LoadPesquisa = async () => {
        let { retornoMetoto } = await this.props.dispRAPI(
            "/usuarios/pesquisar/filtro",
            {}
        );
        if (retornoMetoto.Erro == false) {
            this.setState({
                Registros: retornoMetoto.Response.Registros,
                TotalRegistros: retornoMetoto.Response.TotalRegistros
            });
        }
    };

    render() {
        return Menus.map(Grupo => {
            return (
                <GRUPO_MENU>
                    <GRUPO_MENU_TITULO>
                        <GRUPO_MENU_TITULO_LABEL>
                            {Grupo.Titulo}
                        </GRUPO_MENU_TITULO_LABEL>
                        <GRUPO_MENU_TITULO_BOTOES>
                            <span onClick={e => this.props.onClickNovo()}>
                                Novo
                            </span>
                        </GRUPO_MENU_TITULO_BOTOES>
                    </GRUPO_MENU_TITULO>
                    <GRUPO_MENU_ICONES>
                        {this.state.Registros.map(Usuario => {
                            return this.getMenu(Usuario);
                        })}
                    </GRUPO_MENU_ICONES>
                </GRUPO_MENU>
            );
        });
    }
}
