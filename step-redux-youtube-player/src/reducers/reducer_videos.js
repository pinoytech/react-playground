import { FETCH_VIDEOS  } from '../actions/index';

export default function (state = [], action) {
  // Action is checked if it has a Promise as a payload

  switch (action.type) {
    case FETCH_VIDEOS :
      // return state.push([action.payload.data]); // never mutate state in reducers
      // return state.concat([action.payload.data])// concat doesn't mutate but returns a new state
      return [action.payload.data, ...state] // does the same thing as above (flatten too ). it puts the new data in front

  }
  return state;
}