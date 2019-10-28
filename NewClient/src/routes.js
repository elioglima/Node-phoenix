import React from "react"
import { history } from './redux'
import { Switch, Route } from "react-router"
import { ConnectedRouter } from 'connected-react-router'

import Home from './pages/Home'
import Acesso from './pages/Acesso'
import Logar from './pages/Logar'
import Modulos from './pages/Modulos'
import Painel from './pages/Painel'
import Mensagems from './pages/Mensagens'
import Contatos from './pages/Contatos'
import Tarefas from './pages/Tarefas'
import Atendimento from './pages/Atendimento'
import Configs from './pages/Configs'
import NotFound from './pages/NotFound'

export default () => <ConnectedRouter history={history}>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/acesso' component={Acesso} />
        <Route exact path='/logar' component={Logar} />
        <Route exact path='/modulos' component={Modulos} />
        <Route exact path='/painel' component={Painel} />
        <Route exact path='/mensagens' component={Mensagems} />
        <Route exact path='/contatos' component={Contatos} />
        <Route exact path='/tarefas' component={Tarefas} />
        <Route exact path='/atendimento' component={Atendimento} />
        <Route exact path='/configs' component={Configs} />
        <Route path='*' exact={true} component={NotFound} />
    </Switch>
</ConnectedRouter>