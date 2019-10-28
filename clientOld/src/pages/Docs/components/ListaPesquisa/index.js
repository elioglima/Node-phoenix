import React, { Component } from 'react';
import { connect } from "react-redux";

class Objeto extends Component {
    constructor(props) {
        super(props)
    }   
    
    render() {    
        return (
            <div className="docs-menu-lateral">          
                {
                    this.props.ListaPesquisa.map((item, key) => {
                        return (
                            <div key={"div"+key} onClick={e => this.props.onClickRegistroSelDetalhes(e, key)}>
                                {item.Titulo}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(null,null)(Objeto)
