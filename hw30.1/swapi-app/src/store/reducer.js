import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_PERSON_REQUEST,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILURE,
  CLEAR_DATA
} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  selectedPerson: null,
  personLoading: false,
  personError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PERSON_REQUEST:
      return { ...state, personLoading: true };
    case FETCH_PERSON_SUCCESS:
      return { ...state, personLoading: false, selectedPerson: action.payload };
    case FETCH_PERSON_FAILURE:
      return { ...state, personLoading: false, personError: action.payload };
    case CLEAR_DATA:
      return { ...state, selectedPerson: null };
    default:
      return state;
  }
};

export default reducer;
