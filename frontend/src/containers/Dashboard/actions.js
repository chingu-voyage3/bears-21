export const HOUSE_ISSUES_HAS_ERRORED = "HOUSE_ISSUES_HAS_ERRORED";
export const HOUSE_ISSUES_IS_LOADING = "HOUSE_ISSUES_IS_LOADING";
export const HOUSE_ISSUES_FETCH_DATA_SUCCESS = "HOUSE_ISSUES_FETCH_DATA_SUCCESS";
export const HOUSE_DELETE = "HOUSE_DELETE";
export const HOUSE_DELETE_SUCCESS = "HOUSE_DELETE_SUCCESS";

export function houseDeleteSuccess( house_id) {
  return {
    type: HOUSE_DELETE_SUCCESS,
    house_id
  };
}

export function houseIssuesHasErrored(hasErrored) {
  return {
    type: HOUSE_ISSUES_HAS_ERRORED,
    hasErrored
  };
}

export function houseIssuesIsLoading(isLoading) {
  return {
    type: HOUSE_ISSUES_IS_LOADING,
    isLoading
  };
}

export function houseIssuesFetchDataSuccess(houseIssues) {
  return {
    type: HOUSE_ISSUES_FETCH_DATA_SUCCESS,
    houseIssues
  };
}

export function houseIssuesFetchData(url) {
  return (dispatch) => {
    dispatch( houseIssuesHasErrored( false));
    dispatch( houseIssuesIsLoading( true));
    fetch( url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    })
    .then( response => response.json())
    .then( house_issues => {
      dispatch( houseIssuesIsLoading(false));
      dispatch( houseIssuesFetchDataSuccess( house_issues))
    })
    .catch( () => dispatch( houseIssuesHasErrored( true)));
  };
}

export function houseDelete( house_id) {
  return (dispatch) => {
    dispatch( houseIssuesHasErrored( false));
    dispatch( houseIssuesIsLoading( true));
    fetch( '/api/v1/house', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify( {house_id})
    })
    .then( response => response.json())
    .then( json => {
      dispatch( houseIssuesIsLoading( false));
      dispatch( houseDeleteSuccess( json.house_id));
    })
    .catch( () => dispatch( houseIssuesHasErrored( true)));
  };
}
