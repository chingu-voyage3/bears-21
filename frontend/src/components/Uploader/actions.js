
export const uploadImage = ( payload) => {
  return fetch( "/api/v1/upload", {
    method: "post",
    body: payload
  })
  .then( response => {
    if( !response.ok){
      throw Error( response.stateText);
    }
    return response;
  })
  .catch( err => {
    // eslint-disable-next-line no-console
    console.error( "update house image failed:", err);
  });
};
