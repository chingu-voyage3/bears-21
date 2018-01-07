import {
  ISSUE_FETCH_DATA_SUCCESS,
  ISSUE_SAVE_DATA_SUCCESS,
  ISSUE_IS_WORKING,
  ISSUE_HAS_ERRORED
} from './actions';

export function issueHasErrored( state = false, action) {
  switch( action.type) {
    case ISSUE_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function issueIsWorking( state = false, action) {
  switch( action.type) {
    case ISSUE_IS_WORKING:
      return action.isWorking;
    default:
      return state;
  }
}

const defaultIssue = {
  title: "Title",
  status: "open",
  priority: 2,
  type: "type a",
  description: "Description",
  images:[],
  house: null
};

export function issue( state = defaultIssue, action) {
  switch( action.type) {
    case ISSUE_FETCH_DATA_SUCCESS:
    case ISSUE_SAVE_DATA_SUCCESS:
      return action.issue;
    default:
      return state;
  }
}
