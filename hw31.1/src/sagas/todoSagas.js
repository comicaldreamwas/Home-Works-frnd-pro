

import { takeEvery, put } from 'redux-saga/effects';

function* loadTodos() {
  
  const todos = []; 
  yield put({ type: 'LOAD_TODOS_SUCCESS', payload: todos });
}

function* addTodoSaga(action) {
  
  const newTodo = { ...action.payload, id: Date.now() };
  yield put({ type: 'ADD_TODO_SUCCESS', payload: newTodo });
}

function* deleteTodoSaga(action) {
  yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
}

function* toggleTodoSaga(action) {
  yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: action.payload });
}

function* editTodoSaga(action) {
  yield put({ type: 'EDIT_TODO_SUCCESS', payload: action.payload });
}

function* clearTodosSaga() {
  yield put({ type: 'CLEAR_TODOS_SUCCESS' });
}

function* watchTodoActions() {
  yield takeEvery('LOAD_TODOS_REQUEST', loadTodos);
  yield takeEvery('ADD_TODO_REQUEST', addTodoSaga);
  yield takeEvery('DELETE_TODO_REQUEST', deleteTodoSaga);
  yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodoSaga);
  yield takeEvery('EDIT_TODO_REQUEST', editTodoSaga);
  yield takeEvery('CLEAR_TODOS_REQUEST', clearTodosSaga);
}

export default [watchTodoActions()];
