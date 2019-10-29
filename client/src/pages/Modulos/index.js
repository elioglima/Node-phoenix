import React from 'react'
import { useSelector } from 'react-redux'
import ModeloLogado from '../modeloLogado'

const Objeto = () => {
    const controleModulos = useSelector(state => state.controleModulos)

    return (
        <ModeloLogado header={true} menuLateral={controleModulos.menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            teste
            <br />
            teste
        </ModeloLogado>
    )
}

export default Objeto