import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import "./index.css";

class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "CompReact" + props.nome,
            nome: props.nome,
            selectedOption: props.valor,
            titulo: props.titulo,
            options: props.options
        };
    }

    onChange = selectedOption => {
        this.setState({ selectedOption });
        if (!this.props.onChange) return;
        this.props.onChange(selectedOption);
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="CompReactSelectFieldControl">
                <div className="CompReactSelectFieldControlLabel">
                    {this.state.titulo}
                </div>
                <div className="CompReactSelectFieldControlInput">
                    <Select
                        value={selectedOption}
                        onChange={this.onChange}
                        options={this.props.options}
                    />
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
