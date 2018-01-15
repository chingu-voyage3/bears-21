import {combineReducers} from 'redux';
import {
  ISSUE_RESET,
  ISSUE_FETCH_DATA_SUCCESS,
  ISSUE_SAVE_DATA_SUCCESS,
  ISSUE_IS_WORKING,
  ISSUE_HAS_ERRORED
} from './actions';

function issueHasErrored( state = false, action) {
  switch( action.type) {
    case ISSUE_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
function issueIsWorking( state = false, action) {
  switch( action.type) {
    case ISSUE_IS_WORKING:
      return action.isWorking;
    default:
      return state;
  }
}

const defaultIssue = {
  title: "",
  status: "open",
  priority: 2,
  type: "type a",
  description: "",
  images:[],
  house: null
};

function issue( state = defaultIssue, action) {
  let ret;
  switch( action.type) {
  case ISSUE_FETCH_DATA_SUCCESS:
  case ISSUE_SAVE_DATA_SUCCESS:
    return action.issue;
  case ISSUE_RESET:
    ret = JSON.parse( JSON.stringify(defaultIssue));
    ret.house = action.house;
    return ret;
  default:
    if( state === defaultIssue) {
      ret = JSON.parse( JSON.stringify( defaultIssue));
      ret.house = action.house;
      return ret;
    } else {
      return state;
    }
  }
}

export default combineReducers({
  issue,
  issueIsWorking,
  issueHasErrored
});
