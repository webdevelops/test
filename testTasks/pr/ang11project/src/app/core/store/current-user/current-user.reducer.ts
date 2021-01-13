// Libs
import { Action, createReducer, on } from '@ngrx/store';

// app
import * as currentUserActions from './current-user.actions';
import {
  ICurrentUserState,
  initialCurrentUserState,
} from './current-user.state';

const createCurrentUserReducer = createReducer(
  initialCurrentUserState,
  on(
    currentUserActions.SIGNIN_SUCCESS,
    (state, { user, token }): ICurrentUserState => ({
      ...state,
      user,
      token,
      isAuthenticated: true,
      error: null,
    }),
  ),
  on(
    currentUserActions.SIGNIN_FAILURE,
    (state, { error }): ICurrentUserState => ({
      ...state,
      error,
    }),
  ),
  on(
    currentUserActions.SIGNUP_SUCCESS,
    (state, { user, token }): ICurrentUserState => ({
      ...state,
      user,
      token,
      isAuthenticated: true,
      error: null,
    }),
  ),

  on(
    currentUserActions.CHECK_TOKEN,
    (state): ICurrentUserState => ({
      ...state,
      isUserSessionChecked: false,
      error: null,
    }),
  ),
  on(
    currentUserActions.CHECK_TOKEN_SUCCESS,
    (state): ICurrentUserState => ({
      ...state,
      isUserSessionChecked: true,
      error: null,
    }),
  ),
  on(
    currentUserActions.CHECK_TOKEN_FAILURE,
    (state, { error }): ICurrentUserState => ({
      ...state,
      error,
    }),
  ),

  on(
    currentUserActions.REFRESH_TOKEN,
    (state): ICurrentUserState => ({
      ...state,
      isUserSessionChecked: false,
      error: null,
    }),
  ),
  on(
    currentUserActions.REFRESH_TOKEN_SUCCESS,
    (state, { token }): ICurrentUserState => ({
      ...state,
      isUserSessionChecked: true,
      token,
      error: null,
    }),
  ),

  on(
    currentUserActions.LOAD_USER_PROFILE_SUCCESS,
    (state, { user }): ICurrentUserState => ({
      ...state,
      user,
      error: null,
    }),
  ),
  on(
    currentUserActions.LOAD_USER_PROFILE_FAILURE,
    (state, { error }): ICurrentUserState => ({
      ...state,
      error,
    }),
  ),

  on(
    currentUserActions.LOGOUT_SUCCESS,
    (): ICurrentUserState => initialCurrentUserState,
  ),
  on(
    currentUserActions.CLEAR_STATE_AFTER_LOGOUT,
    (): ICurrentUserState => {
      return {
        ...initialCurrentUserState,
        isUserSessionChecked: true,
      };
    },
  ),
  on(
    currentUserActions.LOGOUT_FAILURE,
    (): ICurrentUserState => initialCurrentUserState,
  ),
  on(
    currentUserActions.SET_IS_AUTHENTICATED,
    (state, { isAuthenticated }): ICurrentUserState => ({
      ...state,
      isAuthenticated,
    }),
  ),
  on(
    currentUserActions.SET_IS_USER_SESSION_CHECKED,
    (state, { isChecked }): ICurrentUserState => ({
      ...state,
      isUserSessionChecked: isChecked,
    }),
  ),
  on(
    currentUserActions.SET_TOKEN,
    (state, { token }): ICurrentUserState => ({
      ...state,
      token,
    }),
  ),
  on(
    currentUserActions.SET_USER,
    (state, { user }): ICurrentUserState => ({
      ...state,
      user,
      isAuthenticated: true,
    }),
  ),
);

export function reducer(
  state: ICurrentUserState | undefined,
  action: Action,
): ICurrentUserState {
  return createCurrentUserReducer(state, action);
}
