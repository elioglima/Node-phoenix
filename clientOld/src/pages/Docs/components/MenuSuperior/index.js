import React, { Component } from 'react';
import { connect } from "react-redux";
import * as Actions from '../../../../routes/routes_actions'
import './css/styles.css';

class Objeto extends Component {
  constructor(props) {    
    super(props)
    this.state = {
      valor:""
    }
  }

  onChangePesquisa = e => {
    e.preventDefault();
    
    this.setState(
      {
        valor: e.target.value
      }
    )

    this.props.onChangePesquisa(e.target.value)
  }

  onClickClearDocs() {
    this.setState(
      {
        valor: ""
      }
    )

    this.props.onClickClearDocs()
  }

  render() {    
    return (
      <div> 
        <div className="menu-off">
          <div className="col-30">
            <span className="titulo" onClick={e => this.onClickClearDocs()} >{this.props.label}</span>            
          </div>

          <div className="col-70 base-right">            
            <span className="item" onClick={e => this.props.dispHome(e)}>Inicio</span>
            <span className="item">
              <input type="text" placeholder="Pesquise aqui.."                       
                      onChange={e => this.onChangePesquisa(e)} 
                      value={this.state.valor}                    

                  />            
            </span>
          </div>
        </div>
        <div className="divisao"></div>
      </div>
    )
  }
}

export default connect(null,Actions)(Objeto)
