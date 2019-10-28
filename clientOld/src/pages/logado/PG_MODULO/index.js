import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import ModeloPagina from "../Controle";

const ListaMenu = [
    {
        Titulo: "Módulos",
        Modelo: "PG_MODULO",
        Ativo: true
    },
    {
        Titulo: "Painel de Controle",
        Modelo: "PG_PAINEL",
        Ativo: false
    }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PaginaSelecionada: "PG_MODULO"
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
