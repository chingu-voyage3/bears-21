import {
  CHANGE_POSTCODE
} from './constants';

function searchReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_POSTCODE:
      return Object.assign({}, state, { postCode: action.value });
    default:
      return state;
  }
}

export default searchReducer;
