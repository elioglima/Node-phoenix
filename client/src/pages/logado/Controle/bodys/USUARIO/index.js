import React, { Component } from "react";
import SUB_PESQUISA from "./SUB_PESQUISA";
import SUB_CADASTRO from "./SUB_CADASTRO";

export default class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub_pagina: "SUB_PESQUISA",
            status_pagina: "PESQUISA",
            id_selecionado: "-1"
        };
    }

    onClickEditar = id_selecionado => {
        this.setState({
            sub_pagina: "SUB_CADASTRO",
            status_pagina: "EDITAR",
            id_selecionado
        });
    };

    onClickNovo = () => {
        this.setState({
            sub_pagina: "SUB_CADASTRO",
            status_pagina: "NOVO",
            id_selecionado: "-1"
        });
    };

    onClickGravar = () => {
        this.setState({
            sub_pagina: "SUB_PESQUISA",
            status_pagina: "PESQUISA",
            id_selecionado: "-1"
        });
    };

    onClickSubPagina = (pagina, status, id_selecionado) => {
        this.setState({
            sub_pagina: pagina,
            status_pagina: status,
            id_selecionado: id_selecionado
        });
    };

    render() {
        switch (this.state.sub_pagina) {
            case "SUB_PESQUISA":
                return (
                    <SUB_PESQUISA
                        {...this.state}
                        {...this.props}
                        onClickNovo={this.onClickNovo.bind()}
                        onClickEditar={this.onClickEditar.bind()}
                        onClickSubPagina={this.onClickSubPagina.bind()}
                    />
                );
            case "SUB_CADASTRO":
                return (
                    <SUB_CADASTRO
                        {...this.state}
                        {...this.props}
                        onClickGravar={this.onClickGravar.bind()}
                        onClickSubPagina={this.onClickSubPagina.bind()}
                    />
                );
            default:
                return (
                    <SUB_PESQUISA
                        {...this.state}
                        {...this.props}
                        onClickNovo={this.onClickNovo.bind()}
                        onClickEditar={this.onClickEditar.bind()}
                        onClickSubPagina={this.onClickSubPagina.bind()}
                    />
                );
        }
    }
}
