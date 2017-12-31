
export const getIssue = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  return new Promise( (resolve, reject) => {
    resolve({
      _id: 1,
      name: "test issue",
      type: "type a",
      priority: 1,
      description: "some issue in my house",
      images: [
        "//via.placeholder.com/200x200?text=something missing"
      ]
    });
  });
};

export const uploadImage = ( payload) => {
  return fetch( "/api/upload", {
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
