import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ChatBot from "../pages/components/chatbot";

import Acesso from "../pages/acesso";
import PG_PAINEL from "../pages/logado/PG_PAINEL";
import PG_MODULO from "../pages/logado/PG_MODULO";
import sair from "../pages/logado/sair";
import NotFound from "../pages/generics/NotFound/pages";
import history from "./history";

function withProps(Component, props) {
    return function(matchProps) {
        return <Component {...props} {...matchProps} />;
    };
}

class Routes extends Component {
    componentDidMount() {}

    render() {
        return (
            <div>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={withProps(Acesso, {
                                dados: this.props.dados
                            })}
                        />
                        <Route
                            path="/painel"
                            component={withProps(PG_PAINEL, {
                                dados: this.props.dados
                            })}
                        />
                        <Route
                            path="/modulos"
                            component={withProps(PG_MODULO, {
                                dados: this.props.dados
                            })}
                        />

                        <Route
                            path="/sair"
                            component={withProps(sair, {
                                dados: this.props.dados
                            })}
                        />

                        <Route
                            path="*"
                            component={withProps(NotFound, {
                                dados: this.props.dados
                            })}
                        />
                    </Switch>
                </ConnectedRouter>
            </div>
        );
    }
}

export default Routes;
