import {
  CHANGE_POSTCODE
} from './actions';

function search(
  state = {
    postCode: ''
  },
  action
) {
  switch (action.type) {
    case CHANGE_POSTCODE:
      return {...state, postCode: action.value};
    default:
      return state;
  }
}

export default search;
