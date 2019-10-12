const INITIAL_STATE = {
    KeyClient:'',
    EmpresaID: -1,
    Documento:'',
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'LOGAR':
            return [
                ...state,
                ...action
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
