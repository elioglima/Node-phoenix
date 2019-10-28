import React, { Component } from 'react';
import { connect } from "react-redux";
import {DataAPI} from '../../controle/DataAPI'
import DocsContainerMetodoBase from '../DocsContainerMetodo'

class Objeto extends Component {
    constructor(props) {
        super(props)
    }

    getDataAPI(index) {
        return DataAPI[index]
    }

    render() {    
        return (            
            <div className="docs-container">
                { 
                    (() => {
                        const Dados = this.getDataAPI(this.props.registro_sel) 
                        return (
                            <div>
                                <div id={Dados.Id} 
                                    className="docs-container-titulo">
                                    { Dados.Titulo } 
                                </div>               

                                <DocsContainerMetodoBase Dados={Dados} />                                
                            </div>   

                        )
                    })()                                                    
                }                    
            </div>
        )
    }

}

export default connect(null,null)(Objeto)
