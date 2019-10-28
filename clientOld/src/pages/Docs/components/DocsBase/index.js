import React, { Component } from 'react';
import { connect } from "react-redux";
import MenuAPI from '../MenuAPI';
import {DataAPI} from '../../controle/DataAPI'
import DocsContainer from '../DocsContainer';
import ListaPesquisa from '../ListaPesquisa';
import DocsContainerPesquisa from '../DocsContainerPesquisa';


class Objeto extends Component {
    constructor(props) {
        super(props)
    }

    getDataAPI(index) {
        return DataAPI[index]
    }

    render() {    
        return (                        
            <div className="docs-base"> 
                { (this.props.ListaPesquisa.length > 0 && this.props.registro_sel_detalhes === -1) &&  <ListaPesquisa {...this.props} {...this.state} /> }                
                { (this.props.ListaPesquisa.length > 0 && this.props.registro_sel_detalhes >= 0) && <DocsContainerPesquisa {...this.props}  /> }                
                { (this.props.ListaPesquisa.length === 0 && this.props.registro_sel === -1) && <MenuAPI {...this.props} /> }                
                { (this.props.ListaPesquisa.length === 0  && this.props.registro_sel > -1) && <DocsContainer {...this.props} /> }                                
            </div>
        )
    }

}

export default connect(null,null)(Objeto)
