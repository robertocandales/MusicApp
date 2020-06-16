import {
  DEMOGRAPHIC_FETCHING,
  DEMOGRAPHIC_FETCHED,
  DEMOGRAPHIC_FETCH_FAILED,
} from '../actions/types.js';

const initialState = {
  isLoading: true,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case DEMOGRAPHIC_FETCHING:
      return { ...state, isLoading: true };
    case DEMOGRAPHIC_FETCHED:
      return { ...state, isLoading: false };
    case DEMOGRAPHIC_FETCH_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
