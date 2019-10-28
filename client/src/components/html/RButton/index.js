import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css'

class Objeto extends Component {
    constructor(props) {
        super(props)
        
        let nome = "CompReactBTID" + this.props.item.Id                        
        this.state = {            
            id:nome,
            valor:props.valor,
            erro:props.erro,
            className:props.className,
        }

    }

    onChange = (e) => {
        this.setState({valor:e.target.value})
    }

    render() {         

        return (
            <div className="CompReactRButtonControl" >
                <div className="CompReactRButtonControlInput">
                    <button  type={this.state.tipo} 
                        className={this.state.className}
                        id={this.state.id} 
                        name={this.state.id}                         
                        onClick={e => this.props.onClick(this.props.item, this.state.id)} 
                        >{this.props.valor}</button> 
                </div>
                
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
