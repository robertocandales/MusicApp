import {
    FETCHING_DATA_SUCCESS,
    SET_SONGS,
    SET_ARTIST,
    SET_ARTIST_NAME,
    FETCHING_DATA_FAILURE, SET_ARTIST_DEMOGRAPHICS, SET_SONG_DEMOGRAPHICS,
} from '../actions/types';
import Artist from '../../../models/Artist';
import Demographic from "../../../models/Demographic";
import Song from "../../../models/Song";

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
        case SET_SONG_DEMOGRAPHICS:
            // payload must have: { song: data, demographics: data }
            if (action.payload.song instanceof Song) {

                const { song, demographics } = action.payload;

                // search the song reference
                const song_objects = state.artist.songs.filter(_song => song.song_name === _song.song_name);

                // set the demographic data in the found song
                for (let i = 0; i < song_objects.length; i++)
                    song_objects[i].demographics.set_data(demographics);
            }

            return {...state};

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
