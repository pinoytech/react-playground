import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/index';
const INITIAL_STATE = { task: '', tasks: []};

export default function (state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case ADD_TASK:
      return {...state, tasks: [action.payload, ...state.tasks]}
    case TOGGLE_TASK:
      return {...state, tasks: updateObjectInArray(state, action)};
    case DELETE_TASK:
      let newArray = state.tasks.slice();
      newArray.splice(action.taskId, 1);
      return {...state, tasks: newArray}
    default:
      return state;
  }
}

function updateObjectInArray(state, action) {
    return state.tasks.map( (item, index) => {
        if(index !== action.taskId) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.payload
        };    
    });
}