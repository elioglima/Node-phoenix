import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModeloLogado from '../modeloLogado'
import { controleMenu } from '../../redux/Actions/controleModulos'
import { menu } from '../constantes'

const Objeto = () => {
    const dispatch = useDispatch()
    const controleModulos = useSelector(state => state.controleModulos)

    useEffect(() => {
        if (controleModulos.menu.length == 0) {
            dispatch(controleMenu(menu))
        }
    }, [])

    return (
        <ModeloLogado header={true} menuLateral={controleModulos.menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            teste
            <br />
            teste
        </ModeloLogado>
    )
}

export default Objeto