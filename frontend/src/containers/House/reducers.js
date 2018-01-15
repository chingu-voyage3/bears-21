import {
  HOUSE_RESET,
  HOUSE_FETCH_DATA_SUCCESS,
  HOUSE_SAVE_DATA_SUCCESS,
  HOUSE_IS_WORKING,
  HOUSE_HAS_ERRORED
} from './actions';

const defaultHouse = {
  title: "",
  description: "",
  location: {
    street: "",
    postCode: ""
  },
  images: [],
  issues: []
};

const initialState = {
  house: Object.assign( {}, defaultHouse),
  houseIsWorking: false,
  houseError: {
    hasErrored: false,
    errorMessage: ""
  },
  houseIsSaved: false,
};

function house( state = Object.assign({}, initialState), action ) {
  switch( action.type) {
    case HOUSE_HAS_ERRORED:
      return {...state,
        houseError: {
          hasErrored: action.hasErrored,
          errorMessage: action.errorMessage||""
        },
        houseIsSaved: false
      };
    case HOUSE_IS_WORKING:
      return {...state, houseIsWorking: action.isWorking};
    case HOUSE_FETCH_DATA_SUCCESS:
      return {...state, house: action.house};
    case HOUSE_SAVE_DATA_SUCCESS:
      return {...state, house: action.house, houseIsSaved: action.houseIsSaved};
    case HOUSE_RESET:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

export default house;
