
// eslint-disable-next-line no-unused-vars
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.error(error); // eslint-disable-line no-console
  throw error;
}

// eslint-disable-next-line no-unused-vars
export function parseJSON(response) {
  return response.json();
}
