import React, { useEffect } from 'react'
import ModeloLogado from '../modeloLogado'



const menu = [
    {
        text: 'Painel de Controle'
    }
]

const Home = () => {
    
    return (
        <ModeloLogado header={true} nav={menu} selection={'selection'} footer={'notifications'} footer={'footer'} >
            teste
            <br/>
            teste
        </ModeloLogado>
    )
}

export default Home