import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "./actionTypes";

import { authApi } from '../../api';

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toString().toLowerCase());
}

export const validateControl = (value, validation, password) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.samePassword) {
    isValid = value === password && isValid;
  }

  return isValid;
}

export const auth = (email, password, isLogin) => async dispatch => {
  dispatch({
    type: AUTH_REQUEST
  });

  try {
    const response = await authApi(email, password, isLogin);

    if (response.error) {
      alert(response.error.message);
    }

    dispatch({
      type: AUTH_SUCCESS,
      payload: response.idToken
    });

    dispatch(autoLogout(response.expiresIn * 1));

  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err,
      error: true
    });
  }
};

const autoLogout = delay => dispatch => {
  const timerId =setTimeout(() => {
    dispatch(logout());

    clearTimeout(timerId);
  }, delay);
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT
  };
};