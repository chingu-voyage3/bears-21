import {combineReducers} from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';
import * as UserTypes from './UserTypes';

function reducer(state = {user:{}, isWorking:false, error:""}, action) {
  switch (action.type) {
    case UserTypes.AUTO_LOGIN_SUCCESS:
    case UserTypes.REQUEST_LOGIN_SUCCESS:
      return {...state,
        user: action.user
      };
    case UserTypes.AUTO_LOGIN_FAILED:
    case UserTypes.REQUEST_LOGIN_FAILED:
      return {...state,
        error: action.error
      };
    case UserTypes.USER_IS_WORKING:
      return {...state,
        isWorking: action.isWorking
      };
    case UserTypes.USER_SUCCESS:
      return {...state,
        user: action.user
      };
    case UserTypes.USER_ERRORED:
      return {
        error: action.userErrored
      };
    case UserTypes.CLEAR_LOGIN_ERROR:
    case UserTypes.LOGOUT:
      return {...state,
        user: {}
      };
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
