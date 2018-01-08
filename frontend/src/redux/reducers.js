import { combineReducers } from 'redux';
import search from '../containers/SearchPage/reducer';

import {
  LOGIN,
  LOGOUT,
  CHANGE_POSTCODE
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

/*
function selectedPostCode(state = '', action) {
  switch (action.type) {
    case SELECT_POSTCODE:
      return action.value;
    default:
      return state;
  }
}*/

function housesByPostCode(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case '':
      return {...state,  postCode: action.value };
    default:
      return state;
  }
}

export default combineReducers({
  login,
  housesByPostCode
});
