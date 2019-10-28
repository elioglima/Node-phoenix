import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'

class Objeto extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            key:props.key,
            titulo:props.titulo,
            className:props.className,
        }
    }

    render() {         
        return (
            <div key={"RButtonDashKeyBase"+this.state.key} className="RButtonDashBase" onClick={e => this.props.onClick(e, this.state.key, this.state.titulo)}>
                <div key={"RButtonDashKeyBase2"+this.state.key} className="RButtonDashBase2">
                    <div key={"RButtonDashKeyTitulo"+this.state.key} className="RButtonDashTitulo" >{this.state.titulo}</div> 
                </div>
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
