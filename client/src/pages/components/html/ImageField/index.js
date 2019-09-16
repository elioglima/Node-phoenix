import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'

class Objeto extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id:"CompReact"+props.nome,
            nome:props.nome,
            tipo:props.tipo,
            valor:props.valor,
            placeholder:props.placeholder,
            titulo:props.titulo,
            erro:props.erro,
            className:props.className,
        }
    }

    onChange = (e) => {
        this.setState({
            valor:e.target.value
        }) 
    }

    render() {  
        return (
            <div key={this.props.id} className="CompReactImageFieldControl" >
                
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
