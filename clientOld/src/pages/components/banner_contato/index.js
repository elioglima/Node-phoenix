import React, { Component } from 'react';
import { connect } from "react-redux";
import './css/styles.css'
import * as config from '../../../config'

class Objeto extends Component {

  state = {
    name:'',
    pass:''
  } 

  onSubmit = e => {
    e.preventDefault();
    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }
    this.props.Logar(parametros)    
  } 

  render() {    
    return (
      <div> 
        <div className="banner-contato">
          <div className="col-50">
            <i className="fas fa-phone-alt"></i>
            <span className="titulo">Telefone</span>
            <span className="texto">{config.app.telefone}</span>
          </div>

          <div className="col-50">
            <div className="col-50">
              <i className="far fa-envelope"></i>
              <span className="titulo">Email</span>
              <span className="texto">{config.app.email}</span>
            </div>
            
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null,null)(Objeto)
