import * as UserTypes from './UserTypes';

export default function userReducer(state = {user:{}, isWorking:false, error:false}, action) {
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
      return {...state,
        error: action.error
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
