export const HOUSE_HAS_ERRORED = "HOUSE_HAS_ERRORED";
export const HOUSE_IS_WORKING = "HOUSE_IS_WORKING";
export const HOUSE_FETCH_DATA_SUCCESS = "HOUSE_FETCH_DATA_SUCCESS";
export const HOUSE_SAVE_DATA_SUCCESS = "HOUSE_SAVE_DATA_SUCCESS";
export const HOUSE_RESET = "HOUSE_RESET";

export function resetHouse() {
  return {
    type: HOUSE_RESET
  };
}

export function houseHasErrored(hasErrored) {
  return {
    type: HOUSE_HAS_ERRORED,
    hasErrored
  };
}

export function houseIsWorking(isWorking) {
  return {
    type: HOUSE_IS_WORKING,
    isWorking
  };
}

export function houseFetchDataSuccess(house) {
  return {
    type: HOUSE_FETCH_DATA_SUCCESS,
    house
  };
}

export function houseSaveDataSuccess(house) {
  return {
    type: HOUSE_SAVE_DATA_SUCCESS,
    house
  };
}

export function houseFetchData( house) {
  return (dispatch) => {
    dispatch( houseHasErrored( false));
    dispatch( houseIsWorking( true));
    fetch( 'api/v1/houses', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify( house._id)
    })
    .then( response => response.json())
    .then( json => {
      dispatch( houseFetchDataSuccess(json.house))
      dispatch( houseIsWorking(false));
    })
    .catch( () => dispatch( houseHasErrored(true)));
  };
}

export function houseSaveData( house) {
  return (dispatch) => {
    dispatch( houseHasErrored( false));
    dispatch( houseIsWorking( true));
    let payload = new FormData();
    let url_images = [];
    let blob_images = [];
    house.images.forEach( (img) => {
      if( typeof img === "string") {
        url_images.push( img);
      } else {
        blob_images.push( img);
      }
    });
    Object.keys( house).forEach( (key) => {
      switch( key) {
      case "images":
        url_images.forEach( (url) => {
          payload.append( "url", url);
        });
        blob_images.forEach( (blob) => {
          payload.append( 'blobs', blob);
        });
        break;
      case "issues":
        house.issues.forEach( (i) => {
          payload.append( 'issues', i._id);
        });
        break;
      case "location":
        payload.append( 'street', house.location.street);
        payload.append( 'postCode', house.location.postCode);
        break;
      default:
        payload.append( [key], house[key]);
        break;
      }
    });
    fetch( '/api/v1/house', {
      method: 'post',
      credentials: 'same-origin',
      body: payload
    })
    .then( response => response.json())
    .then( response => {
      dispatch( houseSaveDataSuccess(response.house))
      dispatch( houseIsWorking(false));
    })
    .catch( () => dispatch( houseHasErrored( true)));
  };
}
