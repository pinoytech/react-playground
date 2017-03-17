import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: FormReducer
});

export default rootReducer;
