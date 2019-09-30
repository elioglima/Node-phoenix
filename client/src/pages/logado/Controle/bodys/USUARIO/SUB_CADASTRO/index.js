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
        Titulo: "Lista de Usuários"
    }
];

export default class Objeto extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    getMenu = menu => {
        return (
            <MENU_ACESSO
                onClick={e => {
                    this.props.dispRota(menu.Rota);
                }}
            >
                <MENU_BASE>
                    <MENU_TITULO>{menu.Nome}</MENU_TITULO>
                    <MENU_DESC>{menu.Atualizado}</MENU_DESC>
                    <MENU_DESC>{menu.Documento}</MENU_DESC>
                    <MENU_DESC>{menu.Email}</MENU_DESC>
                </MENU_BASE>
            </MENU_ACESSO>
        );
    };

    onClickGravar = () => {
        this.props.onClickGravar();
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
                            <span onClick={e => this.onClickGravar()}>
                                Gravar
                            </span>
                        </GRUPO_MENU_TITULO_BOTOES>
                    </GRUPO_MENU_TITULO>
                    <GRUPO_MENU_ICONES>DADOS DO CADASTRO</GRUPO_MENU_ICONES>
                </GRUPO_MENU>
            );
        });
    }
}
