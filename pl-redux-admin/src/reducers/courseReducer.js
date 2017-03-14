import * as types from '../actions/actionTypes';

function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ];
  
    default:
      return state;
  }
}

export default courseReducer;