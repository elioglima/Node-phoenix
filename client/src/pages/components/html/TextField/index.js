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

    componentDidMount = () => {
        this.props.onAutoChange(this.state.id, this.state.valor)
    }

    onChange = (e) => {                
        this.setState({valor:e.target.value})
        this.props.onChange(e, this.state.id, e.target.value)
    }

    render() {  
        return (
            <div key={this.props.key} className="CompReactTextFieldControl" >
                <div className="CompReactTextFieldControlLabel" >{this.state.titulo}</div>
                <div className="CompReactTextFieldControlInput">
                    <input  
                        type={this.state.tipo} 
                        className={this.state.className}
                        id={this.state.id} 
                        name={this.state.id} 
                        value={this.state.valor} 
                        onChange={e => this.onChange(e)} 
                        placeholder={this.state.placeholder}
                        />
                </div>
                {/* { this.state.erro.length > 0 && <div className="CompReactTextFieldControlError" > </div> && "" } */}
                
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
