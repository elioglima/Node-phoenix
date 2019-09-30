import React, { Component } from "react";
import { connect } from "react-redux";
import { MENU, ICO, SVG, TITULO } from "./css/styled";

class Objeto extends Component {
    constructor(props) {
        super(props);
        let ativo = props.ativo ? true : false;
        let modelo = !props.modelo ? 0 : props.modelo;
        this.state = {
            titulo: props.titulo,
            ativo,
            path_svg: props.path_svg,
            modelo: modelo
        };
    }

    onSelecionaPagina = () => {
        if (this.state.modelo == "PG_PAINEL") {
            return this.props.dispPainelControle();
        }

        if (this.state.modelo == "PG_MODULO") {
            return this.props.dispModulos();
        }

        if (!this.props.onSelecionaPagina) return;
        this.props.onSelecionaPagina(this.state.modelo);
    };

    icoPanelControl = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.5 7.59167C1.33431 7.59167 1.2 7.45735 1.2 7.29167V1.375C1.2 1.20931 1.33431 1.075 1.5 1.075H6.16667C6.33235 1.075 6.46667 1.20931 6.46667 1.375V7.29167C6.46667 7.45735 6.33235 7.59167 6.16667 7.59167H1.5ZM1.5 13.925C1.33431 13.925 1.2 13.7907 1.2 13.625V10.875C1.2 10.7093 1.33431 10.575 1.5 10.575H6.16667C6.33235 10.575 6.46667 10.7093 6.46667 10.875V13.625C6.46667 13.7907 6.33235 13.925 6.16667 13.925H1.5ZM9.83333 13.925C9.66765 13.925 9.53333 13.7907 9.53333 13.625V7.70833C9.53333 7.54265 9.66765 7.40833 9.83333 7.40833H14.5C14.6657 7.40833 14.8 7.54265 14.8 7.70833V13.625C14.8 13.7907 14.6657 13.925 14.5 13.925H9.83333ZM9.53333 1.375C9.53333 1.20931 9.66765 1.075 9.83333 1.075H14.5C14.6657 1.075 14.8 1.20931 14.8 1.375V4.125C14.8 4.29069 14.6657 4.425 14.5 4.425H9.83333C9.66765 4.425 9.53333 4.29069 9.53333 4.125V1.375Z"
                    stroke-width="1.4"
                />
            </SVG>
        );
    };

    icoMessage = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.37502 2.00058V1.99999C1.37502 1.46535 1.80785 1.03333 2.33335 1.03333H15.6667C16.1968 1.03333 16.6334 1.46993 16.6334 1.99999V12C16.6334 12.5301 16.1968 12.9667 15.6667 12.9667H2.33335C1.80337 12.9667 1.36683 12.5302 1.36669 12.0002C1.36669 12.0002 1.36669 12.0001 1.36669 12L1.37502 2.00058Z"
                    stroke-width="1.4"
                />
                <path d="M1.5 2L9 7L16.5 2" stroke-width="1.4" />
            </SVG>
        );
    };

    icoManagerTask = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.50002 3.325H16.6667C16.6896 3.325 16.7189 3.33393 16.7483 3.36479C16.7782 3.39612 16.8 3.44308 16.8 3.5V8.75C16.8 8.80692 16.7782 8.85388 16.7483 8.88521C16.7189 8.91607 16.6896 8.925 16.6667 8.925H2.50002C2.47709 8.925 2.44776 8.91607 2.41838 8.88521C2.38853 8.85388 2.36669 8.80692 2.36669 8.75V3.5C2.36669 3.44308 2.38853 3.39612 2.41838 3.36479C2.44776 3.33393 2.47709 3.325 2.50002 3.325ZM2.50002 12.075H16.6667C16.6896 12.075 16.7189 12.0839 16.7483 12.1148C16.7782 12.1461 16.8 12.1931 16.8 12.25V17.5C16.8 17.5569 16.7782 17.6039 16.7483 17.6352C16.7189 17.6661 16.6896 17.675 16.6667 17.675H2.50002C2.47709 17.675 2.44776 17.6661 2.41838 17.6352C2.38853 17.6039 2.36669 17.5569 2.36669 17.5V12.25C2.36669 12.1931 2.38853 12.1461 2.41838 12.1148C2.44776 12.0839 2.47709 12.075 2.50002 12.075Z"
                    stroke-width="1.4"
                />
            </SVG>
        );
    };

    icoContato = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.81112 6.11113C6.81112 4.34912 8.238 2.92224 10 2.92224C11.762 2.92224 13.1889 4.34912 13.1889 6.11113C13.1889 7.87315 11.762 9.30002 10 9.30002C8.238 9.30002 6.81112 7.87315 6.81112 6.11113ZM2.92223 14.8611C2.92223 14.4717 3.11175 14.0788 3.54723 13.6769C3.98746 13.2706 4.63073 12.9041 5.39799 12.5967C6.93364 11.9815 8.7896 11.6722 10 11.6722C11.2104 11.6722 13.0664 11.9815 14.602 12.5967C15.3693 12.9041 16.0126 13.2706 16.4528 13.6769C16.8883 14.0788 17.0778 14.4717 17.0778 14.8611V17.0778H2.92223V14.8611Z"
                    stroke-width="1.4"
                />
            </SVG>
        );
    };

    icoAtendimento = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0)">
                    <path
                        d="M5.00002 14.3H4.71007L4.50505 14.505L2.36669 16.6434V3.33335C2.36669 2.80329 2.80329 2.36669 3.33335 2.36669H16.6667C17.1968 2.36669 17.6334 2.80329 17.6334 3.33335V13.3334C17.6334 13.8634 17.1968 14.3 16.6667 14.3H5.00002Z"
                        stroke-width="1.4"
                    />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </SVG>
        );
    };

    icoModulo = () => {
        return (
            <SVG
                ativo={this.state.ativo}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.50002 4.03333H17.5C17.5718 4.03333 17.6334 4.09493 17.6334 4.16666V15.8333C17.6334 15.9051 17.5718 15.9667 17.5 15.9667H2.50002C2.42829 15.9667 2.36669 15.9051 2.36669 15.8333V4.16666C2.36669 4.09493 2.42829 4.03333 2.50002 4.03333Z"
                    stroke-width="1.4"
                />
                <rect x="6.5" y="3.33333" width="1.16667" height="13.3333" />
                <rect
                    x="12.3333"
                    y="3.33333"
                    width="1.16667"
                    height="13.3333"
                />
            </SVG>
        );
    };

    Images = () => {
        switch (this.state.modelo) {
            case "PG_PAINEL":
                return this.icoPanelControl();
            case "PG_MANAGER_TASK":
                return this.icoManagerTask();
            case "PG_MESSAGE":
                return this.icoMessage();
            case "PG_CONTATO":
                return this.icoContato();
            case "PG_ATENDIMENTO":
                return this.icoAtendimento();
            case "PG_MODULO":
                return this.icoModulo();
            default:
                return this.icoPanelControl();
        }
    };

    render() {
        return (
            <MENU onClick={() => this.onSelecionaPagina()}>
                <ICO>{this.Images()}</ICO>
                <TITULO ativo={this.state.ativo}>{this.state.titulo}</TITULO>
            </MENU>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
