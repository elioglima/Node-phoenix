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
    MENU_REGS
} from "./css/styled";
import { get } from "https";

const Menus = [
    {
        Titulo: "Cadastro",
        Itens: [
            {
                Icone: "Empresas",
                Titulo: "Empresas",
                Descricao: "20, Agosto de 2019",
                Registro: "001"
            },
            {
                Icone: "Usuarios",
                Titulo: "Usuarios",
                Descricao: "12, Setembro de 2019",
                Registro: "002",
                Rota: "usuarios"
            },
            {
                Icone: "Produtos",
                Titulo: "Produtos",
                Descricao: "10, Setembro de 2019",
                Registro: "010"
            },
            {
                Icone: "Fornecedores",
                Titulo: "Fornecedores",
                Descricao: "09, Setembro de 2019",
                Registro: "023"
            }
        ]
    },
    {
        Titulo: "Publicidade",
        Itens: [
            {
                Icone: "MalaDireta",
                Titulo: "Mala Direta",
                Descricao: "15, Agosto de 2019",
                Registro: "003"
            }
        ]
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
                <MENU_ACESSO_IMG>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "images/icones/ico_" +
                            menu.Icone.toLowerCase() +
                            ".svg"
                        }
                    />
                </MENU_ACESSO_IMG>
                <MENU_TITULO>{menu.Titulo}</MENU_TITULO>
            </MENU_ACESSO>
        );
    };

    render() {
        return Menus.map(Grupo => {
            return (
                <GRUPO_MENU>
                    <GRUPO_MENU_TITULO>{Grupo.Titulo}</GRUPO_MENU_TITULO>
                    <GRUPO_MENU_ICONES>
                        {Grupo.Itens.map(menu => {
                            return this.getMenu(menu);
                        })}
                    </GRUPO_MENU_ICONES>
                </GRUPO_MENU>
            );
        });
    }
}
