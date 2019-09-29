import React, { Component } from "react";
import { PAINEL, MANAGER_TASK, MESSAGE, CONTATO, ATENDIMENTO } from "./painel";

export default class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.PaginaSelecionada) {
            case "PG_PAINEL":
                return <PAINEL />;
            case "PG_MANAGER_TASK":
                return <MANAGER_TASK />;
            case "PG_MESSAGE":
                return <MESSAGE />;
            case "PG_CONTATO":
                return <CONTATO />;
            case "PG_ATENDIMENTO":
                return <ATENDIMENTO />;

            default:
                return <div />;
        }
    }
}
