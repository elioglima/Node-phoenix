import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import ModeloPagina from "../Controle";

const ListaMenu = [
    {
        Titulo: "Painel de Controle",
        Modelo: "PG_PAINEL",
        Ativo: true
    },
    {
        Titulo: "Gerenciador de Tarefas",
        Modelo: "PG_MANAGER_TASK",
        Ativo: false
    },
    {
        Titulo: "Mensagens",
        Modelo: "PG_MESSAGE",
        Ativo: false
    },
    {
        Titulo: "Contatos",
        Modelo: "PG_CONTATO",
        Ativo: false
    },
    {
        Titulo: "Atendimento",
        Modelo: "PG_ATENDIMENTO",
        Ativo: false
    },
    {
        Titulo: "Módulos",
        Modelo: "PG_MODULO",
        Ativo: false
    }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PaginaSelecionada: "PG_PAINEL"
        };
    }

    onSelecionaPagina = pagina => {
        this.setState({
            PaginaSelecionada: pagina
        });
    };

    render() {
        return (
            <ModeloPagina
                {...this.props}
                {...this.state}
                Menus={ListaMenu}
                onSelecionaPagina={this.onSelecionaPagina.bind()}
            />
        );
    }
}

export default connect(
    null,
    Actions
)(Objeto);
