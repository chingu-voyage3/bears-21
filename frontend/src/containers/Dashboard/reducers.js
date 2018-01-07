import {
  HOUSE_ISSUES_FETCH_DATA_SUCCESS,
  HOUSE_ISSUES_IS_LOADING,
  HOUSE_ISSUES_HAS_ERRORED
} from './actions';

export function houseIssuesHasErrored( state = false, action) {
  switch( action.type) {
    case HOUSE_ISSUES_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function houseIssuesIsLoading( state = false, action) {
  switch( action.type) {
    case HOUSE_ISSUES_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function houseIssues( state = [], action) {
  switch( action.type) {
    case HOUSE_ISSUES_FETCH_DATA_SUCCESS:
      return action.houseIssues;
    default:
      return state;
  }
}
