const INITIAL_STATE = {
    KeyClient:'',
    EmpresaID: -1,
    Documento:'',
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'LOGAR_SHOW':
            console.log('LOGAR_SHOW', action.payload)
            return {
                ...state,
                EmpresaID:action.payload.EmpresaID ? action.payload.EmpresaID : -1,
                KeyClient:action.payload.KeyClient ? action.payload.KeyClient : '',
                KeyClient:action.payload.Documento ? action.payload.Documento : '',
            }

        case 'LOGAR':
            return [
                ...state,
            ]
        case 'LOGAR_SUCCESS':
            return [
                ...state,
                action.data ? action.data : {},

            ]

        case 'LOGAR_ERROR':
            return [
                ...state,
                // action.payload,                
            ]
        default:
            return state
    }
}
