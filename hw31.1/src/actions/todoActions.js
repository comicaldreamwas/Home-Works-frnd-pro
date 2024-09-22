

export const loadTodosRequest = () => ({ type: 'LOAD_TODOS_REQUEST' });
export const addTodoRequest = (todo) => ({ type: 'ADD_TODO_REQUEST', payload: todo });
export const deleteTodoRequest = (id) => ({ type: 'DELETE_TODO_REQUEST', payload: id });
export const toggleTodoRequest = (id) => ({ type: 'TOGGLE_TODO_REQUEST', payload: id });
export const editTodoRequest = (todo) => ({ type: 'EDIT_TODO_REQUEST', payload: todo });
export const clearTodosRequest = () => ({ type: 'CLEAR_TODOS_REQUEST' });
