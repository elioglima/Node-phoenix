import React, { Component } from "react";
import PAINEL from "./PAINEL";
import ATENDIMENTO from "./ATENDIMENTO";
import CONTATO from "./CONTATO";
import MANAGER_TASK from "./MANAGER_TASK";
import MESSAGE from "./MESSAGE";
import MODULO from "./MODULO";
import USUARIO from "./USUARIO";

export default class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.PaginaSelecionada) {
            case "PG_PAINEL":
                return <PAINEL {...this.props} {...this.state} />;
            case "PG_MANAGER_TASK":
                return <MANAGER_TASK {...this.props} {...this.state} />;
            case "PG_MESSAGE":
                return <MESSAGE {...this.props} {...this.state} />;
            case "PG_CONTATO":
                return <CONTATO {...this.props} {...this.state} />;
            case "PG_ATENDIMENTO":
                return <ATENDIMENTO {...this.props} {...this.state} />;
            case "PG_MODULO":
                return <MODULO {...this.props} {...this.state} />;
            case "PG_USUARIO":
                return <USUARIO {...this.props} {...this.state} />;

            default:
                return <div />;
        }
    }
}
