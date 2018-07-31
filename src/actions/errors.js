import {
    SET_ERROR,
    CLEAR_ERROR,
} from './actionTypes';

export function setError(err) {
    return {
        type: SET_ERROR,
        message: err.message,
    }
}

export function clearError() {
    return {
        type: CLEAR_ERROR,
    }
}