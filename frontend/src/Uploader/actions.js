export default (type, parent_id, data) => {
  let payload = new FormData();
  payload.append('parent_id', parent_id);
  payload.append('type', type);
  data.forEach((img, i) => {
    if (typeof img === 'string') {
      payload.append(`url${i}`, img);
    } else {
      payload.append(`pic`, img);
    }
  });
  return fetch('/api/v1/images', {
    method: 'post',
    credentials: 'same-origin',
    body: payload
  });
};
