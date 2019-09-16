import React, { Component } from 'react';
import { connect } from "react-redux";
import {DataAPI} from '../../controle/DataAPI'
import RButtonDash from '../../../components/html/RButtonDash';

class Objeto extends Component {
    constructor(props) {
        super(props)
    }   
    
    render() {    
        return (
            <div className="docs-menu-lateral">          
                {
                    DataAPI.map((item, key) => {
                        return (
                            <RButtonDash key={item.Id} titulo={item.Titulo} onClick={e => this.props.onClickRegistroSel(e, key)} />                           
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
