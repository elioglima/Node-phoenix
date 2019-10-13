import { call, put } from 'redux-saga/effects'
import { apiLogar } from '../../services/apiAcessos'
import { logarSuccess, logarError } from '../Actions/logar'
import { showDisparo } from '../Actions/show'

export function* logar({payload}) {
    console.log('saga logar', payload)
    const retornoAPI = yield call(apiLogar, payload)

    let dataReciver = {
        ...payload,
        Registro: retornoAPI.data.Response.Registro ? retornoAPI.data.Response.Registro: {},
        TotalRegistros: retornoAPI.data.Response.TotalRegistros ? retornoAPI.data.Response.TotalRegistros: {},
        KeyClient: retornoAPI.err == false && retornoAPI.data.Response.KeyClient && retornoAPI.data.Response.KeyClient,
        err:retornoAPI.err ? retornoAPI.err : retornoAPI.data.Erro,
        msg:retornoAPI.err ? retornoAPI.msg : retornoAPI.data.Mensagem,
    }

    if (retornoAPI.err === true) return yield put(logarError(dataReciver))
    yield put(showDisparo(dataReciver))
}
