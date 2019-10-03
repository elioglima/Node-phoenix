import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonField from "../../components/html/ButtonField";
import SenhaAcesso from "../../components/html/PassWordField";
import { FotoUser } from "./css/styled";

import "./css/styles.css";

const lista = [
    { valor: 0, titulo: "" },
    { valor: 1, titulo: "Administrador" },
    { valor: 2, titulo: "Usuário" }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 1,
            lista: lista
        };
    }

    ProximaPagina = (e, iPagina) => {
        e.preventDefault();
        this.props.ProximaPagina(e, iPagina);
    };

    onKeyUpPSWD = e => {
        if (parseInt(e.keyCode) != 13) return;
        this.ProximaPagina(e, 3);
    };

    OnChangeChangePSWD = retorno => this.props.OnChangeChangePSWD(retorno);

    render() {
        return (
            <div className="Passo02">
                <div className="logo">&nbsp;</div>
                <div className="inputs">
                    <div className="botoes">
                        <span onClick={e => this.ProximaPagina(e, 1)}>
                            voltar
                        </span>
                    </div>
                    <div className="foto">
                        <FotoUser
                            src={
                                process.env.PUBLIC_URL + "images/fotoperfil.png"
                            }
                        />
                    </div>
                    <SenhaAcesso
                        tipo={"password"}
                        nome="SenhaAcesso"
                        placeholder="senha de acesso"
                        valor={this.props.PSWDCadastroFieldValue}
                        titulo="Senha de Acesso"
                        onChange={this.OnChangeChangePSWD}
                        MsgErro={this.props.PSWDCadastroFieldErro}
                        onKeyUp={this.onKeyUpPSWD.bind()}
                    />
                    <ButtonField
                        nome="email"
                        valor="Continuar"
                        onCLick={e => this.ProximaPagina(e, 3)}
                    />
                    <span className="CompReactTextFieldControlLabelErro">
                        {this.props.BotaoContinuarMsgErro}
                    </span>
                    <div className="linha">
                        <span className="esquecimeuemail">
                            esqueci meu email
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
