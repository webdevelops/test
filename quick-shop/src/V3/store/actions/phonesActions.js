
import { 
  FETCH_PHONES_REQUEST, 
  FETCH_PHONES_SUCCESS, 
  FETCH_PHONES_FAILURE, 
  LOAD_MORE_PHONES_REQUEST,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_REQUEST,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE,
  ADD_PHONE_TO_BASKET,
  SEARCH_PHONE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  DELETE_PHONE_FROM_BASKET,
  CLEAN_BASKET
} from "./actionTypes";

import { 
  fetchPhonesApi, 
  loadMorePhonesApi, 
  fetchPhoneByIdApi, 
  fetchCategoriesApi
// } from '../../api';
} from '../../api/mockApi';

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

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  });
};

export const searchPhone = value => dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: value
  });
};

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST
  });

  try {
    const response = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: response
    });
  
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const handleRemovePhone = id => dispatch => {
  dispatch({
    type: DELETE_PHONE_FROM_BASKET,
    payload: id
  });
};

export const handleCleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  });
};

export const handleCheckout = phones => () => () => alert(JSON.stringify(phones));