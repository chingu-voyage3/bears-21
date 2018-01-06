import {
  CHANGE_POSTCODE
} from './constants';

function searchReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_POSTCODE:
      return {...state, postCode: action.value};
    default:
      return state;
  }
}

export default searchReducer;
