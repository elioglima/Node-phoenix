import React, { Component } from "react";
import { connect } from "react-redux";
import { CompReactTextFieldControl, CompReactTextFieldControlLabel, CompReactTextFieldControlInput, CompReactTextFieldControlLabelErro } from './styled'

class Objeto extends Component {
    constructor(props) {
        super(props);

        let format = "";
        if (props.format) if (props.format.length > 0) format = props.format;

        this.state = {
            format,
            id: "CompReact" + props.nome,
            nome: props.nome,
            tipo: props.tipo,
            placeholder: props.placeholder,
            titulo: props.titulo,
            erro: props.erro,
            MsgErro: " ",
            className: props.className,
            formatCPF: props.formatCPF,
            formatCNPJ: props.formatCNPJ
        };
    }

    formatValue = value => {
        
        if (this.state.format.length == 0)
            return {
                erro: false,
                nome: this.state.nome,
                valor: value.toString()
            };

        let valor = value;
        let error = false;

        if (valor.length <= 14) {
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else if (valor.length <= 18) {
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
            valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            error = true;
            this.setState({ MsgErro: "Documento Inválido" });
        }

        return {
            erro: error,
            nome: this.state.nome,
            valor: valor.toString()
        };
    };

    onChange = e => {
        e.preventDefault();
        let retorno = this.formatValue(e.target.value);
        if (retorno.erro == true) return;
        this.setState({ valor: retorno.valor });
        if (!this.props.onChange) return;
        this.props.onChange(e, retorno);
    };

    onKeyUp = e => {
        if (!this.props.onKeyUp) return;
        this.props.onKeyUp(e);
    };

    render() {
        return (
            <CompReactTextFieldControl key={this.props.id}>
                <CompReactTextFieldControlLabel>{this.state.titulo}</CompReactTextFieldControlLabel>
                <CompReactTextFieldControlInput noBorder={this.props.noBorder}>
                    <input
                        type={this.state.tipo}
                        className={this.state.className}
                        id={this.state.id}
                        name={this.state.id}
                        value={this.props.valor}
                        onChange={e => this.onChange(e)}
                        onKeyUp={e => this.onKeyUp(e)}
                        placeholder={this.state.placeholder}
                    />
                    <span className="CompReactTextFieldControlLabelErro">
                        {this.props.MsgErro}
                    </span>
                </CompReactTextFieldControlInput>
            </CompReactTextFieldControl>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
