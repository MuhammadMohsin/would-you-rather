import { combineReducers } from 'redux';
import users from './users';
import authUser from './authUser';
import questions from './questions';

export default combineReducers({
    users,
    authUser,
    questions,
})