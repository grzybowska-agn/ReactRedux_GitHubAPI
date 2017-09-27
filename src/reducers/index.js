import { combineReducers } from 'redux';
import RepoReducer from './reducer_repo';

const rootReducer = combineReducers({
  repo: RepoReducer
});

export default rootReducer;
