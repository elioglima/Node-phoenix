import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonField from '../../components/html/ButtonField'
import ImageField from '../../components/html/ImageField'
import SenhaAcesso from '../../components/html/TextField'
import './css/styles.css';

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

    ProximaPagina = (e, iPagina) => {
        e.preventDefault()
        this.props.ProximaPagina(e, iPagina)
    }

    render() {
        return (
            <div className="Passo02">
                <div className='logo'>&nbsp;</div>
                <div className='inputs'>
                    <div className='botoes'>
                        <span onClick={e => this.ProximaPagina(e, 1)}>voltar</span>
                    </div>
                    <div className='foto'>
                        <ImageField tipo="circule" img={'./foto.png'} />
                    </div>
                    <SenhaAcesso tipo={'password'} nome="SenhaAcesso" placeholder='senha de acesso' valor="" titulo="Senha de Acesso" />
                    <ButtonField nome="email" valor="Continuar" onCLick={e => this.ProximaPagina(e, 3)} />
                    <div className='linha'>
                        <span className='esquecimeuemail'>esqueci meu email</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Objeto);
