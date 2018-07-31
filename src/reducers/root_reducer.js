import { combineReducers } from 'redux';

import phones from './phones';
import errors from './errors';

export const getIsFetching = (state) => {
    return state.phones.isFetching;
}

export default combineReducers({
    phones,
    errors
});