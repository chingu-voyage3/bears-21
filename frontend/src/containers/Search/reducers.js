import { combineReducers } from 'redux';
import {
  SEARCH_HOUSES_REQUEST,
  SEARCH_HOUSES_SUCCESS,
  SEARCH_HOUSES_FAILURE
} from './actions';


/**
 * {
 *    searchedPostCode: '',
 *    housesByPostCode: {
 *      'CB21MW': {
 *        isFetching: true,
 *        items: []
 *      },
 *      'CB42MR': {
 *        isFetching: false,
 *        items: [
 *          {
 *            id: 1,
 *            title: 'Studio Flat'
 *          },
 *          {
 *            id: 2,
 *            title: '2 Bed Mansion'
 *          }
 *        ]
 *      }
 *    }
 * }
 */

function searchedPostCode(state='', action) {
  switch (action.type) {
    case SEARCH_HOUSES_REQUEST:
      return action.postCode;
    default:
      return state;
  }
}

function houses(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case SEARCH_HOUSES_REQUEST:
      return {...state, isFetching: true};
    case SEARCH_HOUSES_SUCCESS:
      return {...state, isFetching: false, items: action.houses};
    case SEARCH_HOUSES_FAILURE:
      return {...state, isFetching: false, errorMessage: ''};
    default:
      return state;
  }
}

function housesByPostCode(state = {}, action) {
  switch (action.type) {
    case SEARCH_HOUSES_REQUEST:
    case SEARCH_HOUSES_SUCCESS:
    case SEARCH_HOUSES_FAILURE:
      return {...state,
        [action.postCode]: houses(state[action.postCode], action)
      };
    default:
      return state;
  }
}

export default combineReducers({
  housesByPostCode,
  searchedPostCode
})

// Selectors
export const getHousesByPostCode = (state, postCode) => {
  return state.search.housesByPostCode[postCode] ?
    state.search.housesByPostCode[postCode].items : [];
};

export const getIsFetching = (state, postCode) => {
  return state.search.housesByPostCode[postCode] ?
    state.search.housesByPostCode[postCode].isFetching : [];
};
