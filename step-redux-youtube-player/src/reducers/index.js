import { combineReducers } from 'redux';
import VideoReducer from './reducer_videos';
import SelectVideoReducer from './reducer_video';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  videos: VideoReducer,
  selectedVideo: SelectVideoReducer
});

export default rootReducer;
