import * as UserTypes from './UserTypes';

export function isWorking(isWorking = false) {
  return {
    type: UserTypes.USER_IS_WORKING,
    isWorking
  };
}
export function userErrored(error = "Unknown Error") {
  return {
    type: UserTypes.USER_ERRORED,
    error
  };
}
export function userSuccess(user={}) {
  return {
    type: UserTypes.USER_SUCCESS,
    user
  };
}

export function getDetail(user_id) {
  return function(dispatch) {
    dispatch( isWorking(true));
    let uri = `/api/v1/user`;
    if( user_id) {
      uri += `/${user_id}`;
    }
    return fetch( uri, {
      credentials: 'same-origin'
    })
    .then( response => {
      dispatch( isWorking( false));
      return response.json();
    })
    .then( json => dispatch( userSuccess(json)))
    .catch(err => dispatch( userErrored(err.message)));
  };
}

export function profileSave( user) {
  return function(dispatch) {
    dispatch( isWorking( true));
    const payload = new FormData();
    payload.append( 'name', user.name);
    payload.append( 'email', user.email);
    if ( typeof user.avatar === 'string') {
      payload.append( 'avatar', user.avatar);
    } else {
      payload.append( 'blobs', user.avatar);
    }
    return fetch( '/api/v1/user', {
      method: 'post',
      credentials: 'same-origin',
      body: payload
    })
    .then( response => {
      dispatch( isWorking(false));
      return response.json();
    })
    .then( json => {
      if( json.success) {
        dispatch( userSuccess(json.user));
      } else {
        dispatch( userErrored(json.message));
      }
    })
    .catch( err => (err));
  };
}
