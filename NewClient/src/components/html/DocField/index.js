import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/TextField/index.css";

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "CompReact" + props.nome,
            nome: props.nome,
            tipo: props.tipo,
            valor: props.valor,
            placeholder: props.placeholder,
            titulo: props.titulo,
            erro: props.erro,
            MsgErro: " ",
            className: props.className,
            formatCPF: props.formatCPF,
            formatCNPJ: props.formatCNPJ
        };
    }

    componentDidMount = () => {};

    Valida = value => {
        const CPF = require("cpf_cnpj").CPF;
        const CNPJ = require("cpf_cnpj").CNPJ;

        if (!value) return false;
        const checkCpf = value.replace(/[^0-9]/g, "");
        if (CPF.isValid(checkCpf)) return true;
        else if (CNPJ.isValid(checkCpf)) return true;
        return false;
    };

    formatValue = value => {
        let valor = value;
        let error = false;

        if (valor.length <= 14) {
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            error = !this.Valida(valor);
        } else if (valor.length <= 18) {
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            error = !this.Valida(valor);
        } else {
            error = true;
        }

        this.setState({ MsgErro: error === true ? "Documento Inválido" : " " });
        return {
            erro: error,
            valor: valor.toString()
        };
    };

    onChange = e => {
        e.preventDefault();
        let retorno = this.formatValue(e.target.value);
        this.setState({ valor: retorno.valor });
        if (!this.props.onChange) return;
        this.props.onChange(retorno);
    };

    onKeyUp = e => {
        if (!this.props.onKeyUp) return;
        this.props.onKeyUp(e);
    };

    render() {
        return (
            <div key={this.props.id} className="CompReactTextFieldControl">
                <div className="CompReactTextFieldControlLabel">
                    {this.state.titulo}
                </div>
                <div className="CompReactTextFieldControlInput">
                    <input
                        type={this.state.tipo}
                        className={this.state.className}
                        id={this.state.id}
                        name={this.state.id}
                        value={this.state.valor}
                        onChange={e => this.onChange(e)}
                        onKeyUp={e => this.onKeyUp(e)}
                        placeholder={this.state.placeholder}
                        onKeyUp={e => this.onKeyUp(e)}
                    />
                    <span className="CompReactTextFieldControlLabelErro">
                        {this.state.MsgErro}&nbsp;
                    </span>
                    &nbsp;
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
