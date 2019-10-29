import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import TextField from '../../components/html/TextField'
import ImageField from '../../components/html/ImageField'
import MenuLateral from './components/menuLateral'

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
                {/* <img src={require('../../assets/images/icoNotificacoes.svg')} /> */}
            </StNotificacoes>

            <StMeuPerfil>
                {/* <img src={require('../../assets/images/icoNotificacoes.svg')} />
                    <span>Elio Lima</span> */}
            </StMeuPerfil>
        </StHeaderBase>
    )
}

export default props => {

    const controleModulos = useSelector(state => state.controleModulos)

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