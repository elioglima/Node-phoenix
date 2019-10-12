import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import logar from './logar'
import consultaDocumento from './consultaDocumento'

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    logar,
    consultaDocumento,
}) 