import React, { useEffect } from 'react'
import ModeloLogado from '../modeloLogado'



const menu = [
    {
        text: 'Painel de Controle'
    },
    {
        text: 'Modulos',
        selected: true
    }
]

const Home = () => {
    
    return (
        <ModeloLogado header={true} menuLateral={menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            teste
            <br/>
            teste
        </ModeloLogado>
    )
}

export default Home