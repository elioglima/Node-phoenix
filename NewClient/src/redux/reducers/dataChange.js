const INITIAL_STATE = {
    err:'',
    msg:''
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'DATA_CHANGE':
            console.log('DATA_CHANGE', action.payload)
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
