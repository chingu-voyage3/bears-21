import { combineReducers } from 'redux';
import {
  HOUSE_DELETE_SUCCESS,
  HOUSE_ISSUES_FETCH_DATA_SUCCESS,
  HOUSE_ISSUES_IS_LOADING,
  HOUSE_ISSUES_HAS_ERRORED
} from './actions';

function houseIssuesHasErrored(state = false, action) {
  switch (action.type) {
    case HOUSE_ISSUES_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

function houseIssuesIsLoading(state = true, action) {
  switch (action.type) {
    case HOUSE_ISSUES_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

function houseIssues(state = [], action) {
  switch (action.type) {
    case HOUSE_ISSUES_FETCH_DATA_SUCCESS:
      return [...action.houseIssues];
    case HOUSE_DELETE_SUCCESS:
      return state.filter(house => house._id !== action.house_id);
    default:
      return state;
  }
}

export default combineReducers({
  houseIssues,
  houseIssuesIsLoading,
  houseIssuesHasErrored
});
