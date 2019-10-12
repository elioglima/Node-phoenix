import React from "react"
import { history } from './redux'
import { Switch, Route } from "react-router"
import { ConnectedRouter } from 'connected-react-router'

import Home from './pages/Home'

export default () => <ConnectedRouter history={history}>
    <Switch>
        <Route exact path='/' component={Home} />
    </Switch>
</ConnectedRouter>
