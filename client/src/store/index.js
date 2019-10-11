import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";

import thunk from "redux-thunk";
import history from "../routes/history";

import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'

const middlewares = [routerMiddleware(history), thunk];
const sagaMiddleware = createSagaMiddleware()
middlewares.push(middlewares)

const store = createStore(
  connectRouter(history)(() => {}),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas)
export default store;
