
import { 
  FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, 
  FETCH_PHONES_FAILURE, 
  LOAD_MORE_PHONES_REQUEST,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_REQUEST,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE
} from "./actionTypes";

import { fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi} from '../../api/mockApi';

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_REQUEST
  });

  try {
    const response = await fetchPhonesApi();
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

export const loadMorePhones = () => async dispatch => {
  dispatch({
    type: LOAD_MORE_PHONES_REQUEST
  });

  try {
    const response = await loadMorePhonesApi();
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: response
    });
  
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const fetchPhoneById = id => async dispatch => {
  dispatch({
    type: FETCH_PHONE_BY_ID_REQUEST
  });

  try {
    const response = await fetchPhoneByIdApi(id);
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: response
    });
  
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: err,
      error: true
    });
  }
};