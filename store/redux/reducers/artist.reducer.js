import {
    FETCHING_DATA_SUCCESS,
    SET_SONGS,
    SET_ARTIST,
    SET_ARTIST_NAME,
    FETCHING_DATA_FAILURE, SET_ARTIST_DEMOGRAPHICS,
} from '../actions/types';
import Artist from '../../../models/Artist';
import Demographic from "../../../models/Demographic";

let artist = new Artist('Justin Bieber'); // default artist

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
            state.artist = action.payload;
            return {
                ...state,
            };
        case SET_ARTIST_DEMOGRAPHICS:
            if (state.artist.demographics)
                state.artist.demographics.set_data(action.payload);
            else
                state.artist.demographics = new Demographic(action.payload);
            return {
                ...state,
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
        default:
            return state;
    }
};

export default artistReducer;
