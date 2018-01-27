
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
