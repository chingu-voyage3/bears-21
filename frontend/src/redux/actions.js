import fetch from 'cross-fetch';

// types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


// action creators
export const loginAction = () => {
  return {
    type: LOGIN,
  };
}

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
}

export const REQUEST_HOUSES = 'REQUEST_HOUSES';
export function requestHouses(postCode) {
  return {
    type: REQUEST_HOUSES,
    postCode
  };
}

export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export function receiveHouses(postCode, json) {
  return {
    type: FETCH_HOUSES_SUCCESS,
    postCode,
    houses: json.data
  };
}

export function fetchHouses(postCode) {
  return function(dispatch) {
    // Inform app that request is starting
    dispatch(requestHouses(postCode));

    return fetch(`/api/v1/houses?postCode=${postCode}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveHouses(postCode, json)));
  };
}
