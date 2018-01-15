
export default ( type, parent_id, data) => {
  console.log( "UploadImages data:", data);
  let payload = new FormData();
  payload.append( "parent_id", parent_id);
  payload.append( "type", type);
  data.forEach( ( img, i) => {
    if( typeof img === "string") {
      console.log( "upload url string:", img);
      payload.append( `url${i}`, img);
    } else {
      console.log( "upload is file:", img);
      payload.append( `pic`, img);
    }
  });
  return fetch( '/api/v1/images', {
    method: 'post',
    credentials: 'same-origin',
    body: payload
  });
};
