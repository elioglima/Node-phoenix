const INITIAL_STATE = {
    err: '',
    msg: '',
    pg_selected: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DATA_CHANGE':
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
