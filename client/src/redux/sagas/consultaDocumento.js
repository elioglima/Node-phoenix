import { call, put } from 'redux-saga/effects'
import { apiConsultaDocumento } from '../../services/apiAcessos'
import { consultaDocumentoSuccess, consultaDocumentoError } from '../Actions/consultaDocumento'
import { showDisparo } from '../Actions/show'

export function* consultaDocumento({ payload }) {
    console.log('saga consultaDocumento', payload)
    const dataSend = { 
        EmpresaID:payload.EmpresaID, 
        Documento:payload.Doc1
    }
    
    const retornoAPI = yield call(apiConsultaDocumento, dataSend)

    let dataReciver = {
        ...payload,
        Registro: retornoAPI.data.Response.Registro ? retornoAPI.data.Response.Registro: {},
        TotalRegistros: retornoAPI.data.Response.TotalRegistros ? retornoAPI.data.Response.TotalRegistros: {},
        KeyClient: retornoAPI.err == false && retornoAPI.data.Response.KeyClient && retornoAPI.data.Response.KeyClient,
        err:retornoAPI.err ? retornoAPI.err : retornoAPI.data.Erro,
        msg:retornoAPI.err ? retornoAPI.msg : retornoAPI.data.Mensagem,
    }
    
    if (dataReciver.err === true) return yield put(consultaDocumentoError(dataReciver))

    yield put(showDisparo(dataReciver))
}