import {combineReducers} from 'redux';
import {
	houseIssues,
	houseIssuesIsLoading,
	houseIssuesHasErrored
} from '../containers/Dashboard';

// QUESTION: shouldn't this reducer be in login with action?
import { LOGIN, LOGOUT, } from './actions.js';

function reducer(state = false, action) {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return state;
	}


}

// user key has to be user
export default combineReducers({
	user: reducer,
	houseIssues,
	houseIssuesIsLoading,
	houseIssuesHasErrored
});
