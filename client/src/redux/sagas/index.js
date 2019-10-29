import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { acessoShow, logarShow, showDisparo, onShow } from './show'
import { logar } from './logar'
import { consultaDocumento } from './consultaDocumento'
import { controleModulos, controleMenu } from './controleModulos'
import { dataChange } from './dataChange'

export default function* rootSaga() {
    yield all([
        takeEvery('CONTROLE_MODULOS', controleModulos),
        takeEvery('CONTROLE_MENU', controleMenu),
        takeLatest('DATA_CHANGE', dataChange),
        takeLatest('SHOW', onShow),
        takeLatest('SHOW_DISPARO', showDisparo),
        takeLatest('ACESSO_SHOW', acessoShow),
        takeLatest('LOGAR_SHOW', logarShow),
        takeLatest('LOGAR', logar),
        takeLatest('CONSULTA_DOCUMENTO', consultaDocumento),
    ])
}
