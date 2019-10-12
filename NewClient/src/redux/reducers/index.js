import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Home from '../../pages/Home/redux/reducers'

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    Home,
}) 