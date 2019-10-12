import { all, takeLatest } from 'redux-saga/effects'
import { logar, logarShow } from './logar'
import { consultaDocumento } from './consultaDocumento'

export default function* rootSaga() {
    yield all([
        takeLatest('LOGAR', logar),
        takeLatest('LOGAR_SHOW', logarShow),
        takeLatest('CONSULTA_DOCUMENTO', consultaDocumento),
    ])
}
