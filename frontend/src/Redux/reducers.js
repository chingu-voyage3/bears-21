import { combineReducers } from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';
import { userReducer } from '../User';

export default combineReducers({
  userReducer,
  houseIssues,
  house,
  issue,
  search
});
