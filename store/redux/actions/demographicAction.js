import {
  DEMOGRAPHIC_FETCHING,
  DEMOGRAPHIC_FETCHED,
  DEMOGRAPHIC_FETCH_FAILED,
  ARTISTS_FETCHED,
  ARTISTS_FETCHING,
  ARTISTS_FETCH_FAILED,
} from './types.js';
import { demographic_service } from './../../../services/demographic.service';

export const demographicAction = (query_params) => async (dispatch, getState) => {
  console.log('action demographic', query_params);
  dispatch({
    type: DEMOGRAPHIC_FETCHING,
  });
  try {
    console.log('result action demographic');

    const result = await demographic_service.get_demographics(query_params);
    console.log('result action demographic', result);
    dispatch({
      type: DEMOGRAPHIC_FETCHED,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: DEMOGRAPHIC_FETCH_FAILED,
      payload: error,
    });
  }
};
