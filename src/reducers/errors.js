import { 
    SET_ERROR,
    CLEAR_ERROR,

    RESPONSE_GET_ALL_PHONES_ERROR,
    RESPONSE_GET_PHONE_BY_ID_ERROR
} from '../actions/actionTypes'

const errors = (state = null, action) => {
    switch (action.type) {
        
        case SET_ERROR:
        case RESPONSE_GET_ALL_PHONES_ERROR:
        case RESPONSE_GET_PHONE_BY_ID_ERROR:
            return action.err;

        case CLEAR_ERROR:
            return null;

        default:
            return state;
    }
}
export const getErrorMessage = (state) => {
    return state.errors ? state.errors.message : null
}
export default errors;