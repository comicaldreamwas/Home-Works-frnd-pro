export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';


export const addTodo = (task) => ({ type: ADD_TODO, task });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const markComplete = (id) => ({ type: MARK_COMPLETE, id });
export const editTodo = (id, task) => ({ type: EDIT_TODO, id, task });
export const clearTodos = () => ({ type: CLEAR_TODOS });
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const setTodos = (todos) => ({ type: SET_TODOS, todos });
