const INITIAL_STATE = {
    EmpresaID: -1,
    Documento: '',
    KeyClient:'',
    Registro: {}
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'CONSULTA_DOCUMENTO':
            console.log('CONSULTA_DOCUMENTO', action)
            return {
                ...state,
                EmpresaID: action.EmpresaID && action.EmpresaID,
                Documento: action.Documento && action.Documento,
            }
        case 'CONSULTA_DOCUMENTO_SUCCESS':
            console.log('CONSULTA_DOCUMENTO_SUCCESS', action.payload)
            return {
                ...state,
                Registro: action.payload.Response.Registro ? action.payload.Response.Registro: {},
                KeyClient: action.payload.Response.KeyClient && action.payload.Response.KeyClient,

            }
        case 'CONSULTA_DOCUMENTO_ERROR':
            console.log('CONSULTA_DOCUMENTO_ERROR', action)
            return [
                ...state,
                // action.payload,                
            ]
        default:
            return state
    }
}


