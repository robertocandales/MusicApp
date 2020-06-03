import {
  FETCHING_DATA_SUCCESS,
  SET_SONGS,
  SET_ARTIST,
  SET_ARTIST_NAME,
  FETCHING_DATA_FAILURE,
} from '../actions/types';
import Artist from '../../../models/Artist';

let artist = new Artist('John Mayer'); // default artist

const initialState = {
  artist,
  isLoading: true,
};

const artistReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_SONGS:
     state.artist.songs = action.payload;
     return {
       ...state,
       isLoading: true,
     };
    case SET_ARTIST_NAME:
     state.artist.name = action.payload;
     return {
       ...state,
     };
    case SET_ARTIST: // this is to refer to a new Artist instance
     if (!(action.payload instanceof Artist)) return {...state};
     return {
       ...state,
       artist: action.payload,
     };
    case FETCHING_DATA_SUCCESS:
     return {
       ...state,
       isLoading: false,
     };
    case FETCHING_DATA_FAILURE:
     return {
       ...state,
       isLoading: false,
       error: true,
     };

  }
};

export default artistReducer;
