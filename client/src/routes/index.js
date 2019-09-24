import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ChatBot from "../pages/components/chatbot";

import Acesso from "../pages/acesso";
import painelcontrole from "../pages/logado/painelcontrole";

import Docs from "../pages/Docs/index";
// import Logado_Inicio from '../pages/logado/inicio/pages/index'
// import NotFound from '../pages/generics/notfound/pages/index'
// import Logado_Cadastro_Usuario_Dados from '../pages/logado/cadastro/usuario/dados/pages/index'
// import Logado_Ajuda from '../pages/logado/ajuda/pages/index'

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
                            path="/logado/painelcontrole"
                            component={withProps(painelcontrole, {
                                dados: this.props.dados
                            })}
                        />
                        <Route
                            path="/docs"
                            component={withProps(Docs, {
                                dados: this.props.dados
                            })}
                        />
                        {/* <Route path="/cadastrousuario" component={withProps(Logado_Cadastro_Usuario_Dados, {dados:this.props.dados})} /> */}
                        {/* <Route path="/logado/ajuda" component={withProps(Logado_Ajuda, {dados:this.props.dados})} /> */}
                        {/* <Route path="*" component={withProps(NotFound, {dados:this.props.dados})} /> */}
                    </Switch>
                </ConnectedRouter>
            </div>
        );
    }
}

export default Routes;
