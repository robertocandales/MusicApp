import { DEMOGRAPHIC_FETCHING, DEMOGRAPHIC_FETCHED, DEMOGRAPHIC_FETCH_FAILED } from './types.js';
import { demographic_service } from './../../../services/demographic.service';
import { SET_ARTIST_DEMOGRAPHICS, SET_SONG_DEMOGRAPHICS } from './types';

export const demographicAction = (query_params) => async (dispatch, getState) => {
  dispatch({
    type: DEMOGRAPHIC_FETCHING,
  });

  try {
    const result = await demographic_service.get_demographics(query_params);

    dispatch({
      type: SET_ARTIST_DEMOGRAPHICS,
      payload: result.report,
    });

    dispatch({
      type: DEMOGRAPHIC_FETCHED,
    });
  } catch (error) {
    dispatch({
      type: DEMOGRAPHIC_FETCH_FAILED,
      payload: error,
    });
  }
};

export const song_demographic_action = (query_params, song_instance, update = false) => async (
  dispatch,
  getState,
) => {
  // if we have demographic data on the song do not make the request, unless update argument is set to true.
  if (song_instance.demographics.data.length && !update) return;

  dispatch({
    type: DEMOGRAPHIC_FETCHING,
  });

  try {
    const result = await demographic_service.get_demographics(query_params);

    dispatch({
      type: SET_SONG_DEMOGRAPHICS,
      payload: { song: song_instance, demographics: result.report },
    });

    dispatch({
      type: DEMOGRAPHIC_FETCHED,
    });
  } catch (error) {
    dispatch({
      type: DEMOGRAPHIC_FETCH_FAILED,
      payload: error,
    });
  }
};
