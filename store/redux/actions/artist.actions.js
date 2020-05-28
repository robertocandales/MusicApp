import {FETCHING_DATA_SUCCESS, SET_SONGS} from './types';
import {songs_service} from '../../../services/songs.service';
import {returnErrors} from './messages';
import {parse_data} from '../../../models/Song'; //todo: try the async method

/**
 *
 * @returns {Function}
 */ export const get_songs = query_params => (dispatch, getState) => {
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
    })
    .catch(response => dispatch(returnErrors(response, response.status))); // todo: test error handling
};
