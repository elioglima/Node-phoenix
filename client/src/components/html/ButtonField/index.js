import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'

class Objeto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "CompReact" + props.nome,
            nome: props.nome,
            valor: props.valor            
        }
    }

    onClick = (e) => {
        if (!this.props.onCLick) return
        this.props.onCLick(e)
    }

    render() {
        return (
            <div key={this.props.id} className="CompReactButtonFieldControl" >
                <div className="CompReactButtonFieldControlButton" >
                    <button
                        id={this.state.id}
                        name={this.state.id}
                        onClick={e=>this.onClick(e)}
                    >{this.state.valor}</button>                    
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Objeto)
