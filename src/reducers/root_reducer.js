import { combineReducers } from 'redux';

import phones from './phones';
import errors from './errors';

export default combineReducers({
    phones,
    errors
});