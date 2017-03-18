export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: {completed: false, name: task}
  }
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    taskId: taskId
  }
}

export function toggleTask(taskId, task) {
  let completion;
  if (task.completed === true) {
    completion = false;
  } else {
    completion = true
  }

  return {
    type: TOGGLE_TASK,
    payload: {completed: completion, name: task.name},
    taskId: taskId
  }
}