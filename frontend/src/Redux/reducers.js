import {combineReducers} from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';

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
  house,
  issue,
  search
});
