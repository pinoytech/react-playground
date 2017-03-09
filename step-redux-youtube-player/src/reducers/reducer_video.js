import { SELECT_VIDEO  } from '../actions/index';

export default function (state = null, action) {
  // Action is checked if it has a Promise as a payload

  switch (action.type) {
    case SELECT_VIDEO :
      // return state.push([action.payload.data]); // never mutate state in reducers
      // return state.concat([action.payload.data])// concat doesn't mutate but returns a new state
      return action.payload // does the same thing as above (flatten too ). it puts the new data in front

  }
  return state;
}