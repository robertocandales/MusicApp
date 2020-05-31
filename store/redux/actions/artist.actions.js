import {
  FETCHING_DATA_SUCCESS,
  SET_SONGS,
  SET_ARTIST,
  ARTISTS_FETCHED,
  ARTISTS_FETCHING,
  ARTISTS_FETCH_FAILED,
} from './types';
import {songs_service} from '../../../services/songs.service';
import {returnErrors} from './messages';
import {parse_data} from '../../../models/Song'; //todo: try the async method

/**
 *
 * @returns {Function}

 */
//  export const get_songs = query_params => (dispatch, getState) => {
//  return songs_service
//    .get_songs(query_params)
//    .then(songs => {
//      dispatch({
//        type: SET_SONGS,
//        payload: parse_data(songs),
//      });
//      dispatch({
//        type: FETCHING_DATA_SUCCESS,
//      });
//      return songs;
//    })
//    .catch(response => dispatch(returnErrors(response, response.status))); // todo: test error handling
//};

export const get_songs = query_params => async (dispatch, getState) => {
  //  console.log('action get_songs, query param', query_params);
  dispatch({
    type: ARTISTS_FETCHING,
  });
  try {
    const result = await songs_service.get_songs(query_params);
    //console.log('result from get_songs', result);

    dispatch({
      type: ARTISTS_FETCHED,
      payload: parse_data(result),
    });
  } catch (error) {
    dispatch({
      type: ARTISTS_FETCH_FAILED,
      payload: error,
    });
  }
};

export const set_artist = query_params => async (dispatch, getState) => {
  //  console.log('action set_artist', query_params);

  try {
    const result = await songs_service.get_songs(query_params);
    //console.log('result from set_artist', result);
    dispatch({
      type: SET_ARTIST,
      payload: parse_data(result),
    });
  } catch (error) {
    console.log(error);
  }
};
