export const HOUSE_ISSUES_HAS_ERRORED = "HOUSE_ISSUES_HAS_ERRORED";
export const HOUSE_ISSUES_IS_LOADING = "HOUSE_ISSUES_IS_LOADING";
export const HOUSE_ISSUES_FETCH_DATA_SUCCESS = "HOUSE_ISSUES_FETCH_DATA_SUCCESS";

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
    .then( response => {
      if(!response.ok){
        throw Error(response.statusText);
      }
      dispatch(houseIssuesIsLoading(false));
      return response;
    })
    .then( response => response.json())
    .then( house_issues => dispatch( houseIssuesFetchDataSuccess( house_issues)))
    .catch( () => dispatch( houseIssuesHasErrored( true)));
  };
}
