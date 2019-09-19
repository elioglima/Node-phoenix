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

    onChange = (e) => {
        if (!this.props.onChange) return
        e.preventDefault()        
        this.props.onChange(e)
    }

    render() {
        return (
            <div className="CompReactSelectFieldControl" >
                <div className="CompReactSelectFieldControlLabel" >{this.state.titulo}</div>
                <div className="CompReactSelectFieldControlInput">
                    <select onChange={this.onChange} >
                        {
                            this.props.options.map((item, key) => {
                                const selected = this.state.valor==item.valor ? 'selected' : ' ' 
                                
                                return (
                                    <option 
                                        key={"div" + key} 
                                        value={item.valor} >                                            
                                        {item.titulo}
                                    </option>
                                )
                            })
                        }

                    </select>
                    <span className="CompReactSelectFieldControlLabelErro" >{this.props.MsgErro}</span>
                </div>
                
            </div>
        )
    }
}

export default connect(null, null)(Objeto)
