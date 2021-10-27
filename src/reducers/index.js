import { combineReducers } from 'redux';
import UserReducer from './user.js';

const allReducers = combineReducers({
    user: UserReducer,
});

export default allReducers;