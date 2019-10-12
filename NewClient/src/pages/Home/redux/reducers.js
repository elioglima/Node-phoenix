const INITIAL_STATE = []

export default function Home(state = INITIAL_STATE, action) {    
    switch (action.type) {
        case 'CONSULTA_DOCUMENTO':
            return [
                ...state,
            ]
        case 'CONSULTA_DOCUMENTO_SUCCESS':
            return [
                ...state,
                action.data ? action.data : {},

            ]
        case 'CONSULTA_DOCUMENTO_ERROR':
            return [
                ...state,
                // action.payload,                
            ]
        default:
            return state
    }
}
