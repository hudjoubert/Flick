const INITIAL_STATE = {
    users: []
}


export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, users: action.payload.data }
            break;

        default:
            return state;
            break;
    }
}