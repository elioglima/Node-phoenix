import React, { Component } from "react";
import { connect } from "react-redux";

import SelectField from "../../components/html/SelectField";
import ButtonField from "../../components/html/ButtonField";
import Documento from "../../components/html/DocField";
import "./css/styles.css";

import libDoc from "../../../libs/fn_docs";

const lista = [
    { value: 1, label: "Centro Maxtriz", sel: false },
    { value: 2, label: "Zona Leste", sel: false },
    { value: 3, label: "Zona Norte", sel: false },
    { value: 4, label: "Santos", sel: false }
];

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 1,
            SelectFieldMsgErro: "",
            cpf_cnpj: props.DocCadastroFieldValue
        };
    }

    OnChangeSelectField = e => {
        this.props.OnChangeSelectField(e);
    };

    strip = function(number, strict) {
        const STRICT_STRIP_REGEX = /[-\/.]/g;
        const LOOSE_STRIP_REGEX = /[^\d]/g;

        var regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
        return (number || "").toString().replace(regex, "");
    };

    OnChangeChangeDocs = retorno => this.props.OnChangeChangeDocs(retorno);

    ProximaPagina = e => {
        e.preventDefault();
        this.props.ProximaPagina(e, 2);
    };

    onKeyUp = e => {
        if (parseInt(e.keyCode) != 13) return;
        this.ProximaPagina(e);
    };

    render() {
        return (
            <div className="Passo01">
                <div className="logo">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/logo_program.svg"
                        }
                    />
                </div>
                <div className="inputs">
                    <SelectField
                        nome="tipo"
                        valor={this.props.EmpresaIDFieldValue}
                        titulo="Tipo de Acesso"
                        options={lista}
                        onChange={this.OnChangeSelectField.bind()}
                        MsgErro={this.props.SelectFieldMsgErro}
                    />
                    <Documento
                        nome="doc"
                        placeholder="informe cpf ou cnpj"
                        valor={this.state.cpf_cnpj}
                        titulo="Documento de Acesso"
                        onChange={this.OnChangeChangeDocs.bind()}
                        onKeyUp={this.onKeyUp.bind()}
                    />
                    <ButtonField
                        nome="email"
                        valor="Continuar"
                        onCLick={this.ProximaPagina}
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
