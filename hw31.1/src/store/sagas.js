import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_TODOS, setTodos } from './actions';


function fetchTodosFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, task: 'Почати проект', completed: false },
        { id: 2, task: 'Закінчити проект', completed: false },
      ]);
    }, 1000);
  });
}


function* fetchTodosSaga() {
  const todos = yield call(fetchTodosFromAPI); 
}


function* rootSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga); 
}

export default rootSaga;
