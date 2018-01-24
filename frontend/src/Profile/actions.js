
export function getDetail() {
  return fetch('/api/v1/user', {
    credentials: 'same-origin'
  })
  .then( response => response.json());
}
