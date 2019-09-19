import React, { Component } from "react";
import { connect } from "react-redux";

import SelectField from '../../components/html/SelectField'
import ButtonField from '../../components/html/ButtonField'
import EMailCadastro from '../../components/html/TextField'
import './css/styles.css';

const lista =
    [
        { valor: 0, titulo: '' },
        { valor: 1, titulo: 'Centro Maxtriz' },
        { valor: 2, titulo: 'Zona Leste' },
        { valor: 3, titulo: 'Zona Norte' },
        { valor: 3, titulo: 'Santos' },
    ]

class Objeto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 1,
            SelectFieldMsgErro: '',
            lista: lista
        }
    }

    OnChangeSelectField = (e) => {
        this.props.OnChangeSelectField(e)
    }

    OnChangeChangeEmailCadastro = (e) => {
        this.props.OnChangeChangeEmailCadastro(e)
    }

    ProximaPagina = (e) => {
        e.preventDefault()
        this.props.ProximaPagina(e, 2)
    }

    render() {
        return (
            <div className="Passo01">
                <div className='logo'>&nbsp;</div>
                <div className='inputs'>
                    <SelectField nome="tipo" valor="0" titulo="Tipo de Acesso" options={this.state.lista} onChange={this.OnChangeSelectField.bind()} MsgErro={this.props.SelectFieldMsgErro} />
                    <EMailCadastro
                        nome="email"
                        placeholder='informe o e-mail'
                        valor=''
                        titulo="E-mail Cadastrado"
                        onChange={this.OnChangeChangeEmailCadastro.bind()}
                        MsgErro={this.props.EmailCadastroMsgErro}
                    />
                    <ButtonField nome="email" valor="Continuar" onCLick={this.ProximaPagina} />
                    <span className="CompReactTextFieldControlLabelErro" >{this.props.BotaoContinuarMsgErro}</span>

                    <div className='linha'>
                        <span className='esquecimeuemail'>esqueci meu email</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Objeto);
