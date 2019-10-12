import { call, put } from 'redux-saga/effects'
import { apiLogar } from '../../services/apiAcessos'
import { logarSuccess, logarError } from '../Actions/logar'
import { push } from "connected-react-router";
import { history } from '../../redux'


export function* logarShow({ payload }) {
    yield call(history.push, '/logar');
}

export function* acessoShow({ payload }) {
    yield call(history.push, '/acesso');
}