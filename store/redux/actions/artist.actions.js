import {
  FETCHING_DATA_SUCCESS,
  SET_SONGS,
  SET_ARTIST,
} from './types';
import { songs_service } from '../../../services/songs.service';
import { returnErrors } from './messages';
import { parse_data } from '../../../models/Song';
import Artist from "../../../models/Artist";

/**
 *
 * @returns {Function}

 */
 export const get_songs = query_params => (dispatch, getState) => {
 return songs_service
   .get_songs(query_params)
     .then(songs => {
         dispatch({
             type: SET_SONGS,
             payload: parse_data(songs),
         });
         dispatch({
             type: FETCHING_DATA_SUCCESS,
         });
         return songs;
     }
     )
     .catch(response => dispatch(returnErrors(response, response.status)));
};

/**
 *
 * @param artist: Must be a Artist instance
 * @returns {Function}
 */
export const set_artist = (artist) => (dispatch, getState) => {
    console.log('songs size: ' + artist.songs.length);
    if (!(artist instanceof Artist)) return;


    dispatch({
      type: SET_ARTIST,
      payload: artist,
    });

    if (!artist.songs.length)
        dispatch(get_songs({user: artist.name, top: 5}));


    if (!artist.demographics)
        ; // get_demographics()

};
