import {combineReducers} from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';

// QUESTION: shouldn't this reducer be in login with action?
import { LOGOUT, CLEAR_LOGIN_ERROR,
  REQUEST_LOGIN_FAILED, REQUEST_LOGIN_SUCCESS,
  AUTO_LOGIN_FAILED, AUTO_LOGIN_SUCCESS
} from './actions.js';

function reducer(state = {}, action) {
  switch (action.type) {
    case AUTO_LOGIN_SUCCESS:
    case REQUEST_LOGIN_SUCCESS:
      return action.user;
    case AUTO_LOGIN_FAILED:
    case REQUEST_LOGIN_FAILED:
      return action.error;
    case CLEAR_LOGIN_ERROR:
    case LOGOUT:
      return {};
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
