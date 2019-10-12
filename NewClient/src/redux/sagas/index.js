import { all, takeLatest } from 'redux-saga/effects'
import { consultaDocumento } from '../../pages/Home/redux/sagas'

export default function* rootSaga() {
    yield all([
        takeLatest('CONSULTA_DOCUMENTO', consultaDocumento),
        // takeLatest('SOLICITAR_LOGIN', solicitarLogin),
        // takeLatest('SAVE_METRICS', saveMetrics),        
        // takeLatest('CONSULTA_CONTRATO', consultarContrato),        
        // takeLatest('CONSULTA_DIVIDA', consultaDivida),
        // takeLatest('CONSULTA_BOLETO_ACORDO', consultaBoletoAcordo),
    ])
}
