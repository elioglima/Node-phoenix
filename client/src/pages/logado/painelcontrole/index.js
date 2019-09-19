import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import './css/styles.css';
import ImageField from '../../components/html/ImageField'


class Objeto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pagina: 1,
      SelectFieldValue: 0,
      SelectFieldMsgErro: '',
      EmailCadastroFieldValue: 0,
      EmailCadastroMsgErro: '',
      BotaoContinuarMsgErro: '',
    }

  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="sidebar">

            <div className="perfil">
              <ImageField tipo="circule" img={'./foto.png'} className={'perfil-foto'} />
              <div className="perfil-dados">
                <div className="perfil-dados-titulo">Elio Lima</div>
                <div className="perfil-dados-descr">diretor.sis@gmail.com</div>
              </div>
            </div>

            <div className="base-container">
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, Actions)(Objeto);
