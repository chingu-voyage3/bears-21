
export default ( parent_id, data) => {
  console.log( "UploadImages data:", data);
  let payload = new FormData();
  payload.append( "parent", parent_id);
  data.forEach( ( img, i) => {
    if( typeof img === "string") {
      console.log( "upload url string:", img);
      payload.append( `url${i}`, img);
    } else {
      console.log( "upload is file:", img);
      payload.append( `pic`, img);
    }
  });
  console.log( "upload data:", payload);
  fetch( '/api/v1/images', {
    method: 'post',
    body: payload
  })
  .then( response => {
    console.log( "image upload response:", response);
  })
  .catch( err => {
    console.log( "image upload failed:", err);
  });
};
