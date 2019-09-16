import React, { Component } from 'react';
import { connect } from "react-redux";
import TextField from '../../../components/html/TextField';

class Objeto extends Component {
    constructor(props) {
        super(props)
    }
    
    


    render() {    
        return (            
            <div className="docs-container-metodo-input">          
                {                                         
                    this.props.item.Parametros.map((itemParam, key2) => {
                        let nome = "ID" + this.props.item.Id + "CMPTP" + itemParam.tipo + "NMCP" + itemParam.nome                        
                        return (
                            <div key={key2} >  
                                <TextField
                                    key={nome}  
                                    nome = {nome} 
                                    tipo = {itemParam.tipo} 
                                    valor = {itemParam.valor} 
                                    titulo = {itemParam.titulo} 
                                    placeholder = {itemParam.placeholder}  
                                    onChange = {this.props.onChange}  
                                    onAutoChange = {this.props.onAutoChange}  
                                    />                                                                                                                              
                            </div>
                        )
                    })
                }
            </div> 
        )
    }

}

export default connect(null,null)(Objeto)
