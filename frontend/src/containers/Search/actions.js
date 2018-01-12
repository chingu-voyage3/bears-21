export const SEARCH_HOUSES_REQUEST = 'SEARCH_HOUSES';
export function searchHouses(postCode='') {
  return {
    type: SEARCH_HOUSES_REQUEST,
    postCode
  };
}

export const SEARCH_HOUSES_SUCCESS = 'SEARCH_HOUSES_SUCCESS';
export function searchHousesSuccess(postCode, json) {
  return {
    type: SEARCH_HOUSES_SUCCESS,
    postCode,
    houses: (json.houses || [])
      .filter(house => house.location.postCode.toLowerCase().includes(postCode.toLowerCase()))
  };
}

export const SEARCH_HOUSES_FAILURE = 'SEARCH_HOUSES_FAILURE';
export function searchHousesFailed(postCode='') {
  return {
    type: SEARCH_HOUSES_FAILURE,
    postCode
  };
}

export function fetchHouses(postCode) {
  return dispatch => {
    dispatch(searchHouses(postCode));

    return fetch('api/v1/houses')
      .then(response => response.json())
      .then(json => dispatch(searchHousesSuccess(postCode, json)))
      .catch(err => dispatch(searchHousesFailed(postCode)));
  }
}
