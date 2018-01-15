const INITIAL_STATE = {
    photos: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'GET_PHOTOS':
            return { ...state, photos: action.payload.data }
            break;

        default:
            return state;
            break;
    }
}
