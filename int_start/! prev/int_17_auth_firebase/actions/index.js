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
  REMOVE_PHONE_FROM_BASKET,
  CLEAN_BASKET,
  CHECKOUT_BASKET,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT
} from 'actions/actionTypes'

import {
  fetchPhonesApi,
  loadMorePhonesApi,
  fetchPhoneByIdApi,
  fetchCategoriesApi,
  authApi
} from 'api'
// } from 'api/mockAPI'  // mock API

import { getRenderPhonesLength } from 'selectors'

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_REQUEST
  })

  try {
    const phones = await fetchPhonesApi()
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderPhonesLength(getState())
  dispatch({
    type: LOAD_MORE_PHONES_REQUEST
  })

  try {
    const phones = await loadMorePhonesApi({ offset })
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      eroor: true
    })
  }
}

export const fetchPhoneById = id => async dispatch => {
  dispatch({
    type: FETCH_PHONE_BY_ID_REQUEST
  })

  try {
    const phone = await fetchPhoneByIdApi(id)
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const searchPhone = search => dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: search
  })
}

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST
  })

  try {
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    })

  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const removePhoneFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
}

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  })
}

export const checkoutBasket = phones => dispatch => {
  dispatch({
    type: CHECKOUT_BASKET,
    payload: phones
  })
}

export const auth = (email, password, isLogin) => async dispatch => {
  console.log("TCL: email", email)
  dispatch({
    type: AUTH_REQUEST
  })

  try {
    const authData = await authApi(email, password, isLogin)
    dispatch({
      type: AUTH_SUCCESS,
      payload: authData.idToken
    })

    const expirationToken = await autoLogout(authData.expiresIn * 1000)
    dispatch(expirationToken)

  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')

  return {
    type: AUTH_LOGOUT
  }
}

const autoLogout = delay => {
  return new Promise(resolve => {
    const timerId = setTimeout(() => {
      resolve(logout())

      clearTimeout(timerId)
    }, delay)
  })
}

export const autoLogin = () => async dispatch => {
  const token = localStorage.getItem('token')

  if (!token) {
    dispatch(logout())

  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'))

    if (expirationDate <= new Date()) {
      dispatch(logout())

    } else {
      dispatch({ type: AUTH_SUCCESS, payload: token })

      const delay = expirationDate.getTime() - new Date().getTime()
      const expirationToken = await autoLogout(delay)
      dispatch(expirationToken)
    }
  }
}