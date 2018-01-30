
export function getDetail(user_id) {
  let uri = `/api/v1/user`;
  if( user_id) {
    uri += `/${user_id}`;
  }
  return fetch( uri, {
    credentials: 'same-origin'
  })
  .then( response => response.json());
}

export function profileSave( user) {
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
  .then( response => response.json())
  .catch( err => (err));
}
