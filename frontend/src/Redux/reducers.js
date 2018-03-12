import {combineReducers} from 'redux';
import houseIssues from '../Dashboard/reducers';
import house from '../House/reducers';
import issue from '../Issue/reducers';
import search from '../Search/reducers';
import user from './userReducer';

export default combineReducers({
  user,
  houseIssues,
  house,
  issue,
  search
});
