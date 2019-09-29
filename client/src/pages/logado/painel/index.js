import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import ModeloPagina from "../Controle";

const ListaMenu = [
    {
        Titulo: "Painel de Controle",
        Modelo: 0,
        Ativo: true
    },
    {
        Titulo: "Gerenciador de Tarefas",
        Modelo: 1,
        Ativo: false
    },
    {
        Titulo: "Mensagens",
        Modelo: 2,
        Ativo: false
    },
    {
        Titulo: "Contatos",
        Modelo: 3,
        Ativo: false
    },
    {
        Titulo: "Atendimento",
        Modelo: 4,
        Ativo: false
    }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ModeloPagina
                {...this.props}
                {...this.state}
                Menus={ListaMenu}
                PaginaSelecionada={0}
            />
        );
    }
}

export default connect(
    null,
    Actions
)(Objeto);
