import { combineReducers } from 'redux';
import UserReducer from './user.js';
import UserListReducer from './user-list.js';

const allReducers = combineReducers({
    user: UserReducer,
    userList: UserListReducer,
});

export default allReducers;