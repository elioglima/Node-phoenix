import React from "react"
import { history } from './redux'
import { Switch, Route } from "react-router"
import { ConnectedRouter } from 'connected-react-router'

import Home from './pages/Home'
import Acesso from './pages/Acesso'
import Logar from './pages/Logar'
import Modulos from './pages/Modulos'

export default () => <ConnectedRouter history={history}>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/acesso' component={Acesso} />
        <Route exact path='/logar' component={Logar} />
        <Route exact path='/modulos' component={Modulos} />
    </Switch>
</ConnectedRouter>