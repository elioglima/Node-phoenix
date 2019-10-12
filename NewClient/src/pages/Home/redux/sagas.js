import { call, put } from 'redux-saga/effects'
import { apiConsultaDocumento } from '../../../services/apiHome'
import { consultaDocumentoSuccess, consultaDocumentoError } from './actions'

export function* consultaDocumento({ payload }) {
    const retornoAPI = yield call(apiConsultaDocumento, payload)
    if (retornoAPI.err === true) return yield put(consultaDocumentoError(retornoAPI.msg))
    yield put(consultaDocumentoSuccess(retornoAPI.data))
}