import axios from 'axios';
import {
  DEMOGRAPHIC_FETCHING,
  DEMOGRAPHIC_FETCHED,
  DEMOGRAPHIC_FETCH_FAILED,
} from './types.js';

export const demographicAction = () => async (dispatch, getState) => {
  console.log('action demographic');
  dispatch({
    type: DEMOGRAPHIC_FETCHING,
  });
  try {
    const get_demographic = await axios.get(
      'http://ec2-52-55-160-105.compute-1.amazonaws.com:3300/api/demographic?user=J%20Balvin',
    );

    dispatch({
      type: DEMOGRAPHIC_FETCHED,
      payload: get_demographic,
    });
  } catch (error) {
    dispatch({
      type: DEMOGRAPHIC_FETCH_FAILED,
      payload: error,
    });
  }
};
