export const ISSUE_HAS_ERRORED = "ISSUE_HAS_ERRORED";
export const ISSUE_IS_WORKING = "ISSUE_IS_WORKING";
export const ISSUE_FETCH_DATA_SUCCESS = "ISSUE_FETCH_DATA_SUCCESS";
export const ISSUE_SAVE_DATA_SUCCESS = "ISSUE_SAVE_DATA_SUCCESS";

export function issueHasErrored( hasErrored) {
  return {
    type: ISSUE_HAS_ERRORED,
    hasErrored
  };
}

export function issueIsWorking(isWorking) {
  return {
    type: ISSUE_IS_WORKING,
    isWorking
  };
}

export function issueFetchDataSuccess(issue) {
  return {
    type: ISSUE_FETCH_DATA_SUCCESS,
    issue
  };
}

export function issueSaveDataSuccess(issue) {
  return {
    type: ISSUE_SAVE_DATA_SUCCESS,
    issue
  };
}

export function issueFetchData( issue) {
  return (dispatch) => {
    dispatch( issueHasErrored(false));
    dispatch( issueIsWorking(true));
    fetch( '/api/v1/issue', {
      method: 'get',
      credentials: 'same-origin',
      body: JSON.stringify( issue._id)
    })
    .then( response => {
      if( !response.ok) {
        throw Error( response.statusText);
      }
      dispatch( issueIsWorking( false));
      return response;
    })
    .then( response => response.json())
    .then( issue => dispatch( issueFetchDataSuccess(issue)))
    .catch( () => dispatch( issueHasErrored(true)));
  };
}

export function issueSaveData( issue) {
  return (dispatch) => {
    dispatch( issueHasErrored( false));
    dispatch( issueIsWorking( true));
    let payload = new FormData();
    const url_images = [];
    const blob_images = [];
    issue.images.forEach( (img) => {
      if( typeof img === "string") {
        url_images.push( img);
      } else {
        blob_images.push( img);
      }
    });
    Object.keys( issue).forEach( key => {
      switch( key) {
      case "images":
        url_images.forEach( url => {
          payload.append( "url", url);
        });
        blob_images.forEach( blob => {
          payload.append( "blobs", blob);
        });
        break;
      default:
        payload.append( [key], issue[key]);
        break;
      }
    });
    fetch( '/api/v1/issue', {
      method: 'post',
      credentials: 'same-origin',
      body: payload
    })
    .then( response => {
      if( !response.ok) {
        throw Error( response.statusText);
      }
      dispatch( issueIsWorking(false));
      return response;
    })
    .then( response => response.json())
    .then( response => dispatch( issueSaveDataSuccess(response.issue)))
    .catch( () => dispatch( issueHasErrored( true)));
  };
}
