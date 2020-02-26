import {
  AUTH_REQUEST, 
  AUTH_SUCCESS, 
  AUTH_FAILURE,
  AUTH_LOGOUT
} from "./actionTypes";

import { authApi } from '../../api';

export const auth = (email, password, isLogin) => async dispatch => {
  dispatch({
    type: AUTH_REQUEST
  });

  try {
    const response = await authApi(email, password, isLogin);

    if (response.error) {
      alert(response.error.message);
    }

    dispatch(authSuccess(response.idToken));
    dispatch(autoLogout(response.expiresIn * 5));

  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err,
      error: true
    });
  }
};

const authSuccess = idToken => {
  return {
    type: AUTH_SUCCESS,
    payload: idToken
  };
};

const autoLogout = delay => dispatch => {
  const timerId = setTimeout(() => {
    dispatch(logout());

    clearTimeout(timerId);
  }, delay);
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT
  };
};

export const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');

  if (!token) {
    dispatch(logout());
    
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));

    if (expirationDate <= new Date()) {
      dispatch(logout());
    
    } else {
      const delay = expirationDate.getTime() - new Date().getTime();

      dispatch(authSuccess(token));
      dispatch(autoLogout(delay));
    }
  }
};