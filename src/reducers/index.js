import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer.js';

export default combineReducers({
	posts: postReducer,
	user: userReducer
});
