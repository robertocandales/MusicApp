import {
  DEMOGRAPHIC_FETCHING,
  DEMOGRAPHIC_FETCHED,
  DEMOGRAPHIC_FETCH_FAILED,
} from '../actions/types.js';

const initialState = {
  demographic: [], // initial value
  loadding: true,
};
export default function itemsReducer(state = initialState, action) {
  //  console.log(state);
  //  console.log(action.type);
  //  console.log(action.payload);
  switch (action.type) {
    case DEMOGRAPHIC_FETCHING:
      return {...state, loadding: true};
    case DEMOGRAPHIC_FETCHED:
      return {...state, loadding: false, demographic: action.payload};
    case DEMOGRAPHIC_FETCH_FAILED:
      return {...state, loadding: false, error: action.payload};

    default:
      return state;
  }
}
