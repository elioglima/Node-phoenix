import React, { Component } from "react";
import { connect } from "react-redux";
import {
    HeaderBase,
    Pesquisa,
    PesquisaImg,
    PesquisaInput,
    Perfil,
    PerfilFoto,
    Dropdown,
    Notificacoes,
    SVGNotificacoes
} from "./css/styled";

class Objeto extends Component {
    constructor(props) {
        super(props);
    }

    onDoubleDblClickSetStatePesquisa = e => {
        if (!this.props.onDoubleDblClickSetStatePesquisa) return false;
        this.props.onDoubleDblClickSetStatePesquisa(true);
    }

    onPesquisarKey = e => {
        if (e.keyCode != 13) return false;
        if (!this.props.onPesquisarKey) return false;
        this.props.onPesquisarKey(true);
    };

    onChangePesquisaInput = (e) => {        
        if (!this.props.onChangeHeaderPesquisaInput) return false;
        this.props.onChangeHeaderPesquisaInput(e.target.value);
    }

    render() {
        return (
            <HeaderBase>
                <Pesquisa>
                    <PesquisaImg
                        src={process.env.PUBLIC_URL + "/images/icoPesquisa.svg"}
                        width="40px"
                        height="40px"
                        onClick={this.onDoubleDblClickSetStatePesquisa}
                    />
                    <PesquisaInput
                        type="text"
                        placeholder={"pesquisar"}
                        onKeyUp={this.onPesquisarKey}
                        onChange={this.onChangePesquisaInput}
                        value={this.props.HeaderPesquisaInputValue}
                    />
                </Pesquisa>

                <Notificacoes>
                    <SVGNotificacoes
                        width="40"
                        viewBox="0 0 37 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M26.75 22V22.4481L27.0844 22.7463L29.7514 25.125H7.2486L9.91563 22.7463L10.25 22.4481V22V15.125C10.25 11.3233 12.4695 8.24278 16.3943 7.41339L17.1875 7.24576V6.435V5.5C17.1875 5.01554 17.6621 4.4375 18.5 4.4375C19.338 4.4375 19.8125 5.01554 19.8125 5.5V6.435V7.24518L20.6051 7.41325C24.5158 8.24254 26.75 11.3378 26.75 15.125V22ZM20.1995 28.5C19.839 28.935 19.2444 29.25 18.5 29.25C17.7478 29.25 17.154 28.9354 16.796 28.5H20.1995Z"
                            fill="white"
                            stroke="#C2CFE0"                            
                        />
                        <path
                            d="M26.2084 14.75C30.0557 14.75 33.375 11.9444 33.375 8.25C33.375 4.55565 30.0557 1.75 26.2084 1.75C22.361 1.75 19.0417 4.55565 19.0417 8.25C19.0417 11.9444 22.361 14.75 26.2084 14.75Z"
                            fill="#F7685B"
                            stroke="white"                            
                        />
                    </SVGNotificacoes>
                </Notificacoes>
                <Perfil>
                    <PerfilFoto
                        src={process.env.PUBLIC_URL + "/images/fotoperfil.png"}
                    />
                    <Dropdown>
                        <svg
                            width="70%"
                            viewBox="0 0 46 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.8762 26.1193C22.0467 27.292 23.9462 27.2938 25.1188 26.1233L44.2288 7.04949C45.4014 5.87903 45.4032 3.97953 44.2328 2.80685C43.0623 1.63417 41.1628 1.63238 39.9901 2.80284L23.0035 19.7574L6.04902 2.77076C4.87856 1.59808 2.97906 1.59629 1.80638 2.76675C0.633704 3.93722 0.631908 5.83671 1.80237 7.00939L20.8762 26.1193ZM20 23.4971L19.9995 23.9972L25.9995 24.0028L26 23.5028L20 23.4971Z"
                                fill="#90A0B7"
                            />
                        </svg>
                    </Dropdown>
                </Perfil>
            </HeaderBase>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
