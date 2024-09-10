import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_PERSON_REQUEST = 'FETCH_PERSON_REQUEST';
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';
export const FETCH_PERSON_FAILURE = 'FETCH_PERSON_FAILURE';

export const CLEAR_DATA = 'CLEAR_DATA';

const API_BASE_URL = 'https://swapi.dev/api/people/';

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await axios.get(API_BASE_URL);
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
};

export const fetchPerson = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PERSON_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}${id}/`);
    dispatch({ type: FETCH_PERSON_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PERSON_FAILURE, payload: error.message });
  }
};

export const clearData = () => ({
  type: CLEAR_DATA
});
