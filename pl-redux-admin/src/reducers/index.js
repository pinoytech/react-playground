import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  ajaxStatusReducer: ajaxStatusReducer
});

export default rootReducer;