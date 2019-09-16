import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import './css/styles.css';

import SelectField from '../components/html/SelectField'
import ButtonField from '../components/html/ButtonField'
import ImageField from '../components/html/ImageField'

import SenhaAcesso from './components/SenhaAcessoTextField'
import EMailCadastro from './components/EmailCadastroTextField'

const lista =
  [
    { valor: 0, titulo: '' },
    { valor: 1, titulo: 'Administrador' },
    { valor: 2, titulo: 'Usuário' },
  ]

class Objeto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pagina: 1,
      lista: lista
    }
  }

  ProximaPagina = (e) => {
    e.preventDefault
    this.setState({ pagina: this.state.pagina + 1 })
  }

  render() {
    console.log(this.state.pagina)
    if (this.state.pagina === 1) {
      return (
        <div>
          <div className="container">
            <div className="box">
              <div className='logo'>&nbsp;</div>
              <div className='inputs'>
                <SelectField nome="tipo" valor="0" titulo="Tipo de Acesso" options={this.state.lista} />
                <EMailCadastro nome="email" placeholder='informe o e-mail' valor="" titulo="E-mail Cadastrado" />
                <ButtonField nome="email" valor="Continuar" onCLick={this.ProximaPagina} />
                <div className='linha'>
                  <span className='esquecimeuemail'>esqueci meu email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.pagina === 2) {
      return (
        <div>
          <div className="container">
            <div className="box">
              <div className='logo'>&nbsp;</div>
              <div className='inputs'>
                <ImageField tipo="circule" img={'./foto.png'} />
                <SenhaAcesso nome="SenhaAcesso" placeholder='senha de acesso' valor="" titulo="Senha de Acesso" />
                <ButtonField nome="email" valor="Continuar" onCLick={this.ProximaPagina} />
                <div className='linha'>
                  <span className='esquecimeuemail'>esqueci meu email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(null, Actions)(Objeto);
