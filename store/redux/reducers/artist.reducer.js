import {
  FETCHING_DATA_SUCCESS,
  SET_SONGS,
  SET_ARTIST,
  SET_ARTIST_NAME,
  FETCHING_DATA_FAILURE,
  ARTISTS_FETCHED,
  ARTISTS_FETCHING,
  ARTISTS_FETCH_FAILED,
} from '../actions/types';
import Artist from '../../../models/Artist';

let artist = new Artist('John Mayer');

const initialState = {
  artist,
  isLoading: true,
};

const artistReducer = (state = initialState, action) => {
  //  console.log(`state ${state.artist}`);
  //  console.log(`action ${action.payloada}`);
  //  console.log('action payload in artist.reducers', action.payload);
  switch (action.type) {
    //case SET_SONGS:
    //  state.artist.songs = action.payload;
    //  return {
    //    ...state,
    //    isFetching: true,
    //  };
    //case SET_ARTIST_NAME:
    //  state.artist.name = action.payload;
    //  return {
    //    ...state,
    //  };
    //case SET_ARTIST: // this is to refer to a new Artist instance
    //  if (!(action.payload instanceof Artist)) return state;
    //  return {
    //    ...state,
    //    artist: action.payload,
    //  };
    //case FETCHING_DATA_SUCCESS:
    //  return {
    //    ...state,
    //    isFetching: false,
    //  };
    //case FETCHING_DATA_FAILURE:
    //  return {
    //    ...state,
    //    isFetching: false,
    //    error: true,
    //  };
    case ARTISTS_FETCHING:
      return {...state, isLoading: true};
    case ARTISTS_FETCHED:
      return {...state, isLoading: false, artist: action.payload};
    case ARTISTS_FETCH_FAILED:
      return {...state, isLoading: false, error: action.payload};
    case SET_ARTIST:
      return {...state, isLoading: false, artist: action.payload};
    default:
      return state;
  }
};

export default artistReducer;
