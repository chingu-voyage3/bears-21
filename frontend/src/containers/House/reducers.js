import {
  HOUSE_RESET,
  HOUSE_FETCH_DATA_SUCCESS,
  HOUSE_SAVE_DATA_SUCCESS,
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

export function houseIsWorking( state = false, action) {
  switch( action.type) {
    case HOUSE_IS_WORKING:
      return action.isWorking;
    default:
      return state;
  }
}

const defaultHouse = {
  title: "Title",
  description: "Description",
  location: {
    street: "Street",
    postCode: "postCode"
  },
  images: [],
  issues: []
};
export function house( state = defaultHouse, action) {
  switch( action.type) {
    case HOUSE_FETCH_DATA_SUCCESS:
    case HOUSE_SAVE_DATA_SUCCESS:
      return action.house;
    case HOUSE_RESET:
      return JSON.parse( JSON.stringify(defaultHouse));
    default:
      if( state === defaultHouse) {
        return JSON.parse( JSON.stringify(state));
      } else {
        return state;
      }
  }
}
