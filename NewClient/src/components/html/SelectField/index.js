import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

class Objeto extends Component {
    constructor(props) {
        super(props);
        let options = props.options;
        for (let index = 0; index < options.length; index++) {
            options[index].sel = options[index].value == this.props.valor;
        }

        this.state = {
            id: "CompReact" + props.nome,
            nome: props.nome,
            selectedOption: props.valor,
            titulo: props.titulo,
            options
        };

        this.props.onChange(props.valor);
    }

    componentDidMount = () => {
        let options = this.props.options;
        for (let index = 0; index < options.length; index++) {
            options[index].sel = options[index].value == this.props.valor;
        }
        console.log("update valor", this.props.valor);
        console.log("update options", options);
        this.setState({ selectedOption: this.props.valor, options });
    };

    onChange = e => {
        let valor = e.target.value;
        console.log(valor);
        this.setState({ selectedOption: valor });
        if (!this.props.onChange) {
            return;
        }
        this.props.onChange(valor);
    };

    render() {
        return (
            <div className="CompReactSelectFieldControl">
                <div className="CompReactSelectFieldControlLabel">
                    {this.state.titulo}
                </div>
                <div className="CompReactSelectFieldControlInput">
                    <select
                        value={this.state.selectedOption}
                        onChange={this.onChange}
                    >
                        {this.state.options.map(dados => {
                            return (
                                <option
                                    key={dados.value + new Date()}
                                    value={dados.value}
                                >
                                    {dados.label}
                                </option>
                            );
                        })}
                    </select>
                    <span className="CompReactSelectFieldControlLabelErro">
                        {this.props.MsgErro}
                    </span>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
