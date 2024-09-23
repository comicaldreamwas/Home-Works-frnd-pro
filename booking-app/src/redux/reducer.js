
import { SET_HOTELS } from './actions';

const initialState = {
  hotels: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotels: action.hotels };
    default:
      return state;
  }
};

export default rootReducer;
