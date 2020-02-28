
import { 
  FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, 
  FETCH_PHONES_FAILURE 
} from "./actionTypes";

import {fetchPhonesApi} from '../../api/mockApi';

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_REQUEST
  });

  try {
    const response = await fetchPhonesApi();
    // console.log("TCL: response", response)
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: response
    });
  
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    });
  }
};