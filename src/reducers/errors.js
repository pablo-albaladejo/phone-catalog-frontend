import { 
    SET_ERROR, 
    CLEAR_ERROR,
} from '../actions/actionTypes'

const errors = (state = null, action) => {
    switch (action.type) {
        
        case SET_ERROR:
            return action.message;

        case CLEAR_ERROR:
            return null;

        default:
            return state;
    }
}
export const getErrorMessage = (state) => {
    return state.errors;
}
export default errors;