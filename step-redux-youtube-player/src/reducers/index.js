import { combineReducers } from 'redux';
import VideoReducer from './reducer_videos';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  videos: VideoReducer
});

export default rootReducer;
