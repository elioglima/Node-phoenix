import { call, put } from 'redux-saga/effects'
import { apiLogar } from '../../services/apiAcessos'
import { logarSuccess, logarError } from '../Actions/logar'
import { push } from "connected-react-router";
import { history } from '../../redux'

export function* logar({ payload }) {
    const retornoAPI = yield call(apiLogar, payload)
    if (retornoAPI.err === true) return yield put(logarError(retornoAPI.msg))
    yield put(logarSuccess(retornoAPI.data))
}

export function* logarShow({ payload }) {
    yield call(history.push, '/logar');
}