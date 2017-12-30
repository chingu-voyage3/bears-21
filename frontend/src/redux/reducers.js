import {combineReducers} from 'redux';
import {
	houseIssues,
	houseIssuesIsLoading,
	houseIssuesHasErrored
} from '../containers/Dashboard';

// QUESTION: shouldn't this reducer be in login with action?
import { LOGIN, LOGOUT, } from './actions.js';


const initialState = {
	user: false,
};


function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {user: true};
		case LOGOUT:
			return {user: false};
		default:
			return state;
	}


}

export default combineReducers({
	reducer,
	houseIssues,
	houseIssuesIsLoading,
	houseIssuesHasErrored
});
