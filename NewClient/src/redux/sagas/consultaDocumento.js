import { call, put } from 'redux-saga/effects'
import { apiConsultaDocumento } from '../../services/apiAcessos'
import { consultaDocumentoSuccess, consultaDocumentoError } from '../Actions/consultaDocumento'

export function* consultaDocumento({ payload }) {
    console.log('saga', payload)
    const retornoAPI = yield call(apiConsultaDocumento, payload)
    if (retornoAPI.err === true) return yield put(consultaDocumentoError(retornoAPI.msg))
    yield put(consultaDocumentoSuccess(retornoAPI.data))
}