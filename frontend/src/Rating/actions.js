export function postRating(type, parent_id, value) {
  const payload = { parent_id, value };
  return fetch(`/api/v1/${type}/rating`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .catch(() => {
      // TODO: pass a message back to user to let them know rating failed
    });
}
