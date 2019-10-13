const INITIAL_STATE = {
    KeyClient:'',
    EmpresaID: -1,
    Documento:'',
    TotalRegistros:-1,
    Registro:{},
    err:false,
    msg:'',
    disparo: ''
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'LOGAR':
            console.log('LOGAR', action)
            return {
                ...state,
                disparo: action.payload.disparo,
                KeyClient: action.payload.KeyClient,
                EmpresaID: action.payload.EmpresaID,
                Documento: action.payload.Documento,
                PSWD: action.payload.PSWD,
            }

        default:
            return state
    }
}
