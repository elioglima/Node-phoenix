import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import ModeloPagina from "../Controle";

const ListaMenu = [
    {
        Titulo: "Usuários",
        Modelo: "PG_USUARIO",
        Ativo: true
    },
    {
        Titulo: "Painel de Controle",
        Modelo: "PG_PAINEL",
        Ativo: false
    },
    {
        Titulo: "Relatórios",
        Modelo: "PG_SUB_RELATORIOS_USUARIO",
        Ativo: false
    }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PaginaSelecionada: "PG_USUARIO"
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
