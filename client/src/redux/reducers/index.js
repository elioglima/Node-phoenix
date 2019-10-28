import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import show from './show'
import logar from './logar'
import consultaDocumento from './consultaDocumento'
import dataChange from './dataChange'

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    dataChange,
    show,
    logar,
    consultaDocumento,
}) 