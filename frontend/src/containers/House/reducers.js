import {
  HOUSE_FETCH_DATA_SUCCESS,
  HOUSE_IS_WORKING,
  HOUSE_HAS_ERRORED
} from './actions';

export function houseHasErrored( state = false, action) {
  switch( action.type) {
    case HOUSE_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function houseIsLoading( state = false, action) {
  switch( action.type) {
    case HOUSE_IS_WORKING:
      return action.isWorking;
    default:
      return state;
  }
}

const defaultHouse = {
  title: "No Title",
  description: "No Description"
};
export function house( state = defaultHouse, action) {
  switch( action.type) {
    case HOUSE_FETCH_DATA_SUCCESS:
      return action.house;
    default:
      return state;
  }
}
