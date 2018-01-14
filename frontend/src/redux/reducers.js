import {combineReducers} from 'redux';
import {
  houseIssues,
  houseIssuesIsLoading,
  houseIssuesHasErrored
} from '../containers/Dashboard';
import {
  house,
  houseHasErrored,
  houseIsWorking
} from '../containers/House';
import {
  issue,
  issueHasErrored,
  issueIsWorking
} from '../containers/Issue';
import search from '../containers/Search/reducers';

// QUESTION: shouldn't this reducer be in login with action?
import { LOGIN, LOGOUT } from './actions.js';

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
  houseIssuesHasErrored,
  house,
  houseHasErrored,
  houseIsWorking,
  issue,
  issueHasErrored,
  issueIsWorking,
  search
});
