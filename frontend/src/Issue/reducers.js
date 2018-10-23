import {
  ISSUE_RESET,
  ISSUE_FETCH_DATA_SUCCESS,
  ISSUE_SAVE_DATA_SUCCESS,
  ISSUE_IS_WORKING,
  ISSUE_HAS_ERRORED
} from './actions';

const defaultIssue = {
  title: "",
  status: "open",
  priority: 2,
  type: "type a",
  description: "",
  images:[],
  house: null
};
const initialState = {
  issue: JSON.parse( JSON.stringify( defaultIssue)),
  isWorking: false,
  isSaved: false,
  issueError: {
    hasErrored: false,
    errorMessage: "Unknown Error"
  }
};

function issue( state , action) {
  if( typeof state === "undefined") {
    state = JSON.parse( JSON.stringify( initialState))
  }
  let ret;
  switch( action.type) {
    case ISSUE_IS_WORKING:
      return {...state, isWorking: action.isWorking};
    case ISSUE_HAS_ERRORED:
      return {...state,
        issueError:{
          hasErrored: action.hasErrored,
          errorMessage: action.errorMessage
        }
      };
    case ISSUE_FETCH_DATA_SUCCESS:
    case ISSUE_SAVE_DATA_SUCCESS:
      return {...state,
        issue: action.issue,
        isSaved: true
      };
    case ISSUE_RESET:
      ret = JSON.parse( JSON.stringify(initialState));
      ret.issue.house = action.house;
      return ret;
    default:
      return state;
  }
}

export default issue;
