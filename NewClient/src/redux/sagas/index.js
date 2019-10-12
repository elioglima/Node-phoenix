import { all, takeLatest } from 'redux-saga/effects'
import { acessoShow, logarShow } from './show'
import { logar } from './logar'
import { consultaDocumento } from './consultaDocumento'

export default function* rootSaga() {
    yield all([
        takeLatest('ACESSO_SHOW', acessoShow),
        takeLatest('LOGAR_SHOW', logarShow),
        takeLatest('LOGAR', logar),
        takeLatest('CONSULTA_DOCUMENTO', consultaDocumento),
    ])
}
