
import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_HOTELS, setHotels } from './actions';

function* fetchHotelsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/hotels');
    yield put(setHotels(response.data));
  } catch (error) {
    console.error('Failed to fetch hotels', error);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsSaga);
}
