import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { acessoShow, logarShow, showDisparo, onShow } from './show'
import { logar } from './logar'
import { consultaDocumento } from './consultaDocumento'
import { dataChange } from './dataChange'

export default function* rootSaga() {
    yield all([
        takeLatest('DATA_CHANGE', dataChange),
        takeLatest('SHOW', onShow),
        takeLatest('SHOW_DISPARO', showDisparo),
        takeLatest('ACESSO_SHOW', acessoShow),
        takeLatest('LOGAR_SHOW', logarShow),
        takeLatest('LOGAR', logar),
        takeLatest('CONSULTA_DOCUMENTO', consultaDocumento),
    ])
}
