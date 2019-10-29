import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TextField from '../../components/html/TextField'
import ImageField from '../../components/html/ImageField'
import MenuLateral from './components/menuLateral'
import { controleMenu } from '../../redux/Actions/controleModulos'
import { menu } from '../constantes'

import {
    StPage,
    StContainer,
    StHeader,
    StFooter,
    StBase,
    StSelection,
    StBody,
    StBodyScrool,
    StHeaderBase,
    StNotificacoes,
    StMeuPerfil,
} from './css/styles'

const CpHeader = (props) => {
    return (
        <StHeaderBase>
            <img src={require('../../assets/images/icoPesquisa.svg')} />
            <TextField noBorder={true} />

            <StNotificacoes>
                {props.notifications}
                <img src={require('../../assets/images/icoNotificacoes.svg')} />
            </StNotificacoes>

            <StMeuPerfil>
                {/* <img src={require('../../assets/images/icoNotificacoes.svg')} />
                <span>Elio Lima</span> */}
            </StMeuPerfil>
        </StHeaderBase>
    )
}

export default props => {

    const dispatch = useDispatch()
    const controleModulos = useSelector(state => state.controleModulos)

    useEffect(() => {
        if (controleModulos.menu.length == 0) {
            dispatch(controleMenu(menu))
        }
    }, [])

    return (
        <StPage>
            <StContainer>
                <StBase>
                    <MenuLateral lines={controleModulos.menu} />
                    <StSelection>
                        {props.header && <StHeader><CpHeader notifications={props.notifications} /></StHeader>}
                        <StBody><StBodyScrool>{props.children}</StBodyScrool></StBody>
                        {props.footer && <StFooter>{props.footer}</StFooter>}
                    </StSelection>
                </StBase>
            </StContainer>
        </StPage>
    )
}