
export const ADD_TODO = 'ADD_TODO';


export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task
});
