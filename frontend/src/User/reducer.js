import * as UserTypes from './UserTypes';

const initialState = {
  user: {},
  isWorking: false,
  error: false,
};

export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UserTypes.REQUEST_LOGIN_START:
      return {...state, isWorking: true };
    case UserTypes.LOGIN:
    case UserTypes.AUTO_LOGIN_SUCCESS:
    case UserTypes.REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        user: { ...action.user },
        isWorking: false
      };
    case UserTypes.AUTO_LOGIN_FAILED:
    case UserTypes.REQUEST_LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isWorking: false
      };
    case UserTypes.USER_IS_WORKING:
      return {
        ...state,
        isWorking: true
      };
    case UserTypes.USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isWorking: false
      };
    case UserTypes.USER_ERRORED:
      return {
        ...state,
        error: action.error,
        isWorking: false
      };
    case UserTypes.CLEAR_LOGIN_ERROR:
    case UserTypes.LOGOUT:
      return {
        ...state,
        user: {},
        isWorking: false
      };
    default:
      return state;
  }
}
