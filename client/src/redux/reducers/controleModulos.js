const INITIAL_STATE = {
    err: '',
    msg: '',
    menu: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONTROLE_MENU':
            console.log('CONTROLE_MENU', action)
            return {
                ...state,
                menu: action.payload
            }

        case 'CONTROLE_MODULOS':
            console.log('CONTROLE_MODULOS', action)
            return {
                ...state,
                ...action.payload
            }

        default:
            return {
                ...state
            }
    }
}
