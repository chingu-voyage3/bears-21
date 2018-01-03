export const HOUSE_ISSUES_HAS_ERRORED = "HOUSE_ISSUES_HAS_ERRORED";
export const HOUSE_ISSUES_IS_LOADING = "HOUSE_ISSUES_IS_LOADING";
export const HOUSE_ISSUES_FETCH_DATA_SUCCESS = "HOUSE_ISSUES_FETCH_DATA_SUCCESS";

export function houseIssuesHasErrored( bool) {
  return {
    type: HOUSE_ISSUES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function houseIssuesIsLoading( bool) {
  return {
    type: HOUSE_ISSUES_IS_LOADING,
    isLoading: bool
  };
}

export function houseIssuesFetchDataSuccess( houseIssues) {
  return {
    type: HOUSE_ISSUES_FETCH_DATA_SUCCESS,
    houseIssues
  };
}

export function houseIssuesFetchData( url) {
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
      if( !response.ok){
        throw Error( response.statusText);
      }
      console.log( "house issues !json:", response);
      dispatch( houseIssuesIsLoading( false));
      return response;
    })
    .then( response => response.json())
    .then( house_issues => {
      console.log( "house issues response:", house_issues);
      dispatch( houseIssuesFetchDataSuccess( house_issues.houses))
    })
    .catch( () => dispatch( houseIssuesHasErrored( true)));
  };
}
