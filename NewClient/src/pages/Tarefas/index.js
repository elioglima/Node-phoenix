import React, { useEffect } from 'react'
import ModeloLogado from '../modeloLogado'
import { menu } from '../constantes'

const Objeto = () => {
    return (
        <ModeloLogado header={true} menuLateral={menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            teste
            <br />
            teste
        </ModeloLogado>
    )
}

export default Objeto