import { combineReducers } from 'redux';
import {
  SEARCH_HOUSES_REQUEST,
  SEARCH_HOUSES_SUCCESS,
  SEARCH_HOUSES_FAILURE,
  UPDATE_POST_CODE,
  SEARCH_POST_CODE_START,
  SEARCH_POST_CODE_SUCCESS,
  SEARCH_POST_CODE_FAILED
} from './actions';

/**
 * {
 *    searchedPostCode: '',
 *    isFetching: false,
 *    suggestions: []
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

function isFetching(state = '', action) {
  switch (action.type) {
    case SEARCH_POST_CODE_START:
      return true;
    case SEARCH_POST_CODE_SUCCESS:
    case SEARCH_POST_CODE_FAILED:
      return false;
    default:
      return state;
  }
}

function suggestions(state = [], action) {
  switch (action.type) {
    case SEARCH_POST_CODE_SUCCESS:
      return action.suggestions;
    default:
      return state;
  }
}

function searchedPostCode(state = '', action) {
  switch (action.type) {
    case SEARCH_HOUSES_REQUEST:
    case UPDATE_POST_CODE:
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
      return { ...state, isFetching: true };
    case SEARCH_HOUSES_SUCCESS:
      return { ...state, isFetching: false, items: action.houses };
    case SEARCH_HOUSES_FAILURE:
      return { ...state, isFetching: false, errorMessage: '' };
    default:
      return state;
  }
}

function housesByPostCode(state = {}, action) {
  switch (action.type) {
    case SEARCH_HOUSES_REQUEST:
    case SEARCH_HOUSES_SUCCESS:
    case SEARCH_HOUSES_FAILURE:
      return {
        ...state,
        [action.postCode]: houses(state[action.postCode], action)
      };
    default:
      return state;
  }
}

export default combineReducers({
  housesByPostCode,
  searchedPostCode,
  suggestions,
  isFetching
});

// Selectors
export const getHousesByPostCode = (state, postCode) => {
  return state.search.housesByPostCode[postCode]
    ? state.search.housesByPostCode[postCode].items
    : [];
};

export const getIsFetching = (state, postCode) => {
  return state.search.housesByPostCode[postCode]
    ? state.search.housesByPostCode[postCode].isFetching
    : false;
};

export const getSuggestions = state => {
  return state.search.suggestions;
};

export const getIsFetchingSuggestions = state => {
  return state.search.isFetching;
};
