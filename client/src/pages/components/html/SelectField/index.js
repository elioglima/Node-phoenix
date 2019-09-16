import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'

class Objeto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "CompReact" + props.nome,
            nome: props.nome,
            valor: props.valor,
            titulo: props.titulo,
            options: props.options,
        }
    }

    render() {
        return (
            <div className="CompReactSelectFieldControl" >
                <div className="CompReactSelectFieldControlLabel" >{this.state.titulo}</div>
                <div className="CompReactSelectFieldControlInput">
                    <select>

                        {
                            this.props.options.map((item, key) => {
                                return (
                                    <option key={"div" + key} value={item.valor} >
                                        {item.titulo}
                                    </option>
                                )
                            })
                        }

                    </select>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Objeto)
