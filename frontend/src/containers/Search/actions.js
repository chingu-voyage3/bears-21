import { Search, SearchMock } from '../../core/service';

export const UPDATE_POST_CODE = 'UPDATE_POST_CODE';
export function updatePostCode(postCode='') {
  return {
    type: UPDATE_POST_CODE,
    postCode
  };
}

export const SEARCH_HOUSES_REQUEST = 'SEARCH_HOUSES';
export function searchHouses(postCode='') {
  return {
    type: SEARCH_HOUSES_REQUEST,
    postCode
  };
}

export const SEARCH_POST_CODE_START = 'SEARCH_POST_CODE_START';
export function searchPostCodeStart(postCode) {
  return {
    type: SEARCH_POST_CODE_START,
    postCode
  };
}

export const SEARCH_POST_CODE_SUCCESS = 'SEARCH_POST_CODE_SUCCESS';
export function searchPostCodeSuccess(postCode = '', suggestions = []) {
  return {
    type: SEARCH_POST_CODE_SUCCESS,
    postCode,
    suggestions: findMatchingPostCodes(suggestions, postCode)
  };
}

export const SEARCH_POST_CODE_FAILED = 'SEARCH_POST_CODE_FAILED';
export function searchPostCodeFailed(postCode = '', err) {
  return {
    type: SEARCH_POST_CODE_FAILED,
    postCode,
    err
  };
}

export const SEARCH_HOUSES_SUCCESS = 'SEARCH_HOUSES_SUCCESS';
export function searchHousesSuccess(postCode, json) {
  return {
    type: SEARCH_HOUSES_SUCCESS,
    postCode,
    houses: (json.houses || [])
      .filter(house => house.location.postCode.toLowerCase()
                            .includes(postCode.toLowerCase()) &&
                       house.active)
  };
}

export const SEARCH_HOUSES_FAILURE = 'SEARCH_HOUSES_FAILURE';
export function searchHousesFailed(postCode='', err) {
  return {
    type: SEARCH_HOUSES_FAILURE,
    postCode,
    err
  };
}

export function fetchHouses(postCode) {
  return dispatch => {
    dispatch(searchHouses(postCode));

    return fetch('api/v1/houses')
      .then(response => response.json())
      .then(json => dispatch(searchHousesSuccess(postCode, json)))
      .catch(err => dispatch(searchHousesFailed(postCode, err)));
  };
}

export function searchPostCodes(postCode) {
  return (dispatch) => {
    dispatch(updatePostCode(postCode));
    dispatch(searchPostCodeStart(postCode));
    SearchMock.getAll()
              .then(json => dispatch(searchPostCodeSuccess(postCode, json)))
              .catch(err => dispatch(searchPostCodeFailed(postCode, err)));
  };
}

function findMatchingPostCodes(postCodes, key) {
  const suggestions = postCodes.filter(p => p.text.toLowerCase().includes(key.toLowerCase()));
  return suggestions;
}
