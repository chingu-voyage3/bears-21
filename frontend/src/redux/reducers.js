import { combineReducers } from 'redux';
import searchReducer from '../containers/SearchPage/reducer';
import {
  LOGIN,
  LOGOUT,
} from './actions.js';


const initialState = {
  user: false,
};


function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { user: true };
    case LOGOUT:
      return { user: false };
    default:
      return state;
  }
}

export default combineReducers({
  login,
  search: searchReducer
});
