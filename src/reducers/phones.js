import { 
    REQUEST_GET_ALL_PHONES,
    RESPONSE_GET_ALL_PHONES_SUCCESS,
    RESPONSE_GET_ALL_PHONES_ERROR,

    REQUEST_GET_PHONE_BY_ID,
    RESPONSE_GET_PHONE_BY_ID_SUCCESS,
    RESPONSE_GET_PHONE_BY_ID_ERROR,
} from "../actions/actionTypes";

import { combineReducers } from 'redux';

function phones(state = {}, action) {

    switch (action.type) {
        
        case RESPONSE_GET_ALL_PHONES_SUCCESS:
        case RESPONSE_GET_PHONE_BY_ID_SUCCESS:
            return action.phones;

        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {

        case REQUEST_GET_ALL_PHONES:
        case REQUEST_GET_PHONE_BY_ID:
            return true;

        case RESPONSE_GET_ALL_PHONES_SUCCESS:
        case RESPONSE_GET_ALL_PHONES_ERROR:
        case RESPONSE_GET_PHONE_BY_ID_SUCCESS:
        case RESPONSE_GET_PHONE_BY_ID_ERROR:
            return false;

        default:
            return state;
    }
}
export default combineReducers({
    data: phones,
    isFetching
});