import React, { useEffect } from 'react'
import ModeloLogado from '../modeloLogado'



const menu = [
    {
        ico: 'painel',
        text: 'Painel de Controle'
    },
    {
        ico: 'modulos',
        text: 'Modulos',
        actived: true
    },
    {
        ico: 'mensagens',
        text: 'Mensagem',
    },
    {
        ico: 'contatos',
        text: 'Contatos',
    },
    {
        ico: 'tasks',
        text: 'Gerenciador Tarefas',
    },
    {
        ico: 'atendimento',
        text: 'Atendimento',
    },
    {
        ico: 'mais',
        text: 'Configuraões',
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