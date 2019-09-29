import React, { Component } from "react";
import { connect } from "react-redux";
import { MENU, ICO, SVG, TITULO } from "./css/styled";

class Objeto extends Component {
    constructor(props) {
        super(props);
        let ativo = props.ativo ? true : false;
        this.state = {
            titulo: props.titulo,
            ativo
        };
    }

    render() {
        return (
            <MENU>
                <ICO>
                    <SVG
                        ativo={this.state.ativo}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5 7.59167C1.33431 7.59167 1.2 7.45735 1.2 7.29167V1.375C1.2 1.20931 1.33431 1.075 1.5 1.075H6.16667C6.33235 1.075 6.46667 1.20931 6.46667 1.375V7.29167C6.46667 7.45735 6.33235 7.59167 6.16667 7.59167H1.5ZM1.5 13.925C1.33431 13.925 1.2 13.7907 1.2 13.625V10.875C1.2 10.7093 1.33431 10.575 1.5 10.575H6.16667C6.33235 10.575 6.46667 10.7093 6.46667 10.875V13.625C6.46667 13.7907 6.33235 13.925 6.16667 13.925H1.5ZM9.83333 13.925C9.66765 13.925 9.53333 13.7907 9.53333 13.625V7.70833C9.53333 7.54265 9.66765 7.40833 9.83333 7.40833H14.5C14.6657 7.40833 14.8 7.54265 14.8 7.70833V13.625C14.8 13.7907 14.6657 13.925 14.5 13.925H9.83333ZM9.53333 1.375C9.53333 1.20931 9.66765 1.075 9.83333 1.075H14.5C14.6657 1.075 14.8 1.20931 14.8 1.375V4.125C14.8 4.29069 14.6657 4.425 14.5 4.425H9.83333C9.66765 4.425 9.53333 4.29069 9.53333 4.125V1.375Z"
                            sstroke="#109CF1"
                            stroke-width="1.4"
                        />
                    </SVG>
                </ICO>
                <TITULO ativo={this.state.ativo}>{this.state.titulo}</TITULO>
            </MENU>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
