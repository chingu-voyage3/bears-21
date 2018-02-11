import fetch from 'cross-fetch';
import * as UserTypes from './UserTypes';

export function requestLoginSuccess(user) {
  return {
    type: UserTypes.REQUEST_LOGIN_SUCCESS,
    user
  };
}
export function requestLoginFailed(error) {
  return {
    type: UserTypes.REQUEST_LOGIN_FAILED,
    error
  };
}
export function clearLoginError() {
  return {
    type: UserTypes.CLEAR_LOGIN_ERROR
  };
}
export function requestLogin(payload) {
  return function(dispatch) {
    dispatch( clearLoginError());
    return fetch('/api/v1/login', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify( payload)
    })
    .then( res => res.json())
    .then( json => dispatch(requestLoginSuccess(json)))
    .catch( err => dispatch(requestLoginFailed(err)));
  }
}

export function autoLoginSuccess( user) {
  return {
    type: UserTypes.AUTO_LOGIN_SUCCESS,
    user
  }
}
export function autoLoginFailed(error) {
  return {
    type: UserTypes.AUTO_LOGIN_FAILED,
    error
  }
}
export function autoLogin() {
  return function(dispatch) {
    return fetch('/api/v1/user',{
      credentials: 'same-origin'
    })
    .then( res => {
      if( res.ok) return res.json();
      return {};
    })
    .then( json => dispatch(autoLoginSuccess(json)))
    .catch( err => dispatch(autoLoginFailed(err)));
  };
}

export function requestLogout() {
  return {
    type: UserTypes.LOGOUT
  }
}
export function logout() {
  return function(dispatch) {
    dispatch( requestLogout());
    return fetch('/api/v1/logout');
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
