import { call, put } from 'redux-saga/effects'
import { history } from '../../redux'
import { dataChange } from '../Actions/dataChange'


export function* logarShow({ payload }) {
    yield call(history.push, '/logar');
}

export function* acessoShow({ payload }) {
    yield call(history.push, '/acesso');
}

export function* showDisparo({ payload }) {
    console.log('showDisparo yield',payload)
    yield put(dataChange(payload));
    if (!payload.disparo) return 
    yield call(history.push, '/'+payload.disparo);
}