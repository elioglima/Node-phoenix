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
                ...action.payload,
            }
        
        default:
            return state
    }
}


