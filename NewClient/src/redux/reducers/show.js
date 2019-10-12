const INITIAL_STATE = {
    KeyClient:'',
    EmpresaID: -1,
    Documento:'',
    disparo:''
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'SHOW_STATE':
            console.log('SHOW_STATE', action.payload)
            return {
                ...state,
                ...action.payload
            }

        case 'LOGAR_SHOW':
            console.log('LOGAR_SHOW', action.payload)
            return {
                ...state,
                ...action.payload,
                disparo:''
            }

        case 'ACESSO_SHOW':
            console.log('ACESSO_SHOW', action.payload)
            return {
                ...state,
                ...action.payload,
                disparo:''
            }

        default:
            return state
    }
}
