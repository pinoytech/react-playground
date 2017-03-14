import { combineReducers } from 'redux';
import createCourse from '../reducers/courseReducer';

const rootReducer = combineReducers({
  courses: createCourse
});

export default rootReducer;