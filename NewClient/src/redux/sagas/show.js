import { call, put } from 'redux-saga/effects'
import { history } from '../../redux'
import { dataChange } from '../Actions/dataChange'
import { setCookie } from '../../Cookies'

export function* logarShow({ payload }) {
    yield call(history.push, '/logar');
}

export function* acessoShow({ payload }) {
    yield call(history.push, '/acesso');
}

export function* showDisparo({ payload }) {
    console.log('showDisparo yield', payload)
    yield put(dataChange({ ...payload, pg_selected: payload.disparo }));
    if (!payload.disparo) return
    setCookie('pg_selected', payload.disparo)
    yield call(history.push, '/' + payload.disparo);
}

export function* onShow({ payload }) {
    console.log('onShow yield', payload)
    yield put(dataChange({ pg_selected: payload }));
    setCookie('pg_selected', payload)
    yield call(history.push, '/' + payload);
}