import React, { Component } from "react";
import { connect } from "react-redux";
import config from "../../config";
import * as Actions from "./actions/actions";
import libEmail from "../../libs/fn_email";
import './css/styles.css';

import Passo01 from './Passo01'
import Passo02 from './Passo02'

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

  dispRAPI = async () => {
    let { Status, Response, body } = await this.props.dispRAPI('/usuarios/pesquisar/email', { EmpresaID: 1, Email: this.state.EmailCadastroFieldValue })

    if (Status != 200) {
      this.setState({ BotaoContinuarMsgErro: body })
    }
    const Erro = body.Erro
    if (Erro == true) {
      this.setState({ BotaoContinuarMsgErro: 'Ops, aconteceu um erro interno.' })
    }

    this.setState({
      BotaoContinuarMsgErro: body.Mensagem
    })

  }

  ProximaPagina = async (e, iPagina) => {

    this.setState({
      SelectFieldMsgErro: '', EmailCadastroMsgErro: ''
    })

    if ((this.state.pagina === 1) && (iPagina === 2)) {
      if (this.state.SelectFieldValue === 0) {
        this.setState({ SelectFieldMsgErro: 'Informe o tipo de acesso' })
        return

      } else if (!libEmail.isEmailValid(this.state.EmailCadastroFieldValue)) {
        this.setState({ EmailCadastroMsgErro: 'E-Mail não é válido.' })
        return
      }

      let { Status, Response, body } = await this.props.dispRAPI('/usuarios/pesquisar/email', { EmpresaID: 1, Email: this.state.EmailCadastroFieldValue })

      if (Status != 200) {
        this.setState({ BotaoContinuarMsgErro: body })
      }
      const Erro = body.Erro
      if (Erro == true) {
        this.setState({ BotaoContinuarMsgErro: 'Ops, aconteceu um erro interno.' })
      }

      this.setState({
        BotaoContinuarMsgErro: body.Mensagem
      })

      if (body.Response.TotalRegistros != 1) {
        this.setState({ BotaoContinuarMsgErro: 'Ops, não foi possível localizar o e-mail.' })
      }


    }

    this.setState({
      pagina: iPagina,
      BotaoContinuarMsgErro: ''
    })

    if (iPagina === 3) {
      this.props.dispPainelControle()
    }

  }

  OnChangeSelectField = (e) => this.setState({ SelectFieldValue: e.target.value })
  OnChangeChangeEmailCadastro = (e) => this.setState({ EmailCadastroFieldValue: e.target.value })

  render() {

    return (
      <div>
        <div className="container">
          {
            (() => {
              if (this.state.pagina === 1) {
                return <Passo01
                  {...this.state}
                  ProximaPagina={this.ProximaPagina.bind()}
                  OnChangeSelectField={this.OnChangeSelectField.bind()}
                  OnChangeChangeEmailCadastro={this.OnChangeChangeEmailCadastro.bind()}
                />

              } else if (this.state.pagina === 2) {
                return <Passo02 ProximaPagina={this.ProximaPagina.bind()} />
              }
            })()
          }
        </div>
      </div>
    )
  }
}

export default connect(null, Actions)(Objeto);
