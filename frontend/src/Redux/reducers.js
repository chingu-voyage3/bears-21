import {combineReducers} from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';
import userReducer from './userReducer';

// user key has to be user
export default combineReducers({
  user: userReducer,
  houseIssues,
  house,
  issue,
  search
});
