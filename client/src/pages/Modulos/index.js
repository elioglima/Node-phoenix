import React from 'react'
import { useSelector } from 'react-redux'
import ModeloLogado from '../modeloLogado'
import BoxContainer from '../../components/generics/boxContainer'
import BoxIcon from '../../components/generics/boxIcon'
import libDate from '../../libs/fn_date'

const Objeto = () => {
    const controleModulos = useSelector(state => state.controleModulos)

    return (
        <ModeloLogado header={true} menuLateral={controleModulos.menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            <BoxContainer titulo='Cadastros'>
                <BoxIcon titulo="Empresas" desc={'20, Agosto de 2019'} icone={require('../../assets/icons/ico_empresas.svg')} count={10} />
                <BoxIcon titulo="Usuários" desc={'10, Agosto de 2019'} icone={require('../../assets/icons/ico_usuarios.svg')} count={100} />
            </BoxContainer>

            <BoxContainer titulo='Ferramentas'>
                tools
            </BoxContainer>
        </ModeloLogado>
    )
}

export default Objeto