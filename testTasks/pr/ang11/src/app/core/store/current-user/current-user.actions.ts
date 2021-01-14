// libs
import { Injectable } from '@angular/core';

import { createAction, props, Store } from '@ngrx/store';

// app
import * as rootIntfs from '@app/interfaces';
import { IAppState } from '@app/store/app.state';

export const SIGNUP = createAction(
  '[Current User] SIGNUP',
  props<{ email: string; password: string; recaptcha: string }>(),
);
export const SIGNUP_SUCCESS = createAction(
  '[Current User] SIGNUP_SUCCESS',
  props<{ user: rootIntfs.IAuthUser; token: rootIntfs.IAuthToken }>(),
);
export const SIGNUP_FAILURE = createAction(
  '[Current User] SIGNUP_FAILURE',
  props<{ error: any }>(),
);

export const SIGNIN = createAction(
  '[Current User] SIGNIN',
  props<{ email: string; password: string }>(),
);
export const SIGNIN_SUCCESS = createAction(
  '[Current User] SIGNIN_SUCCESS',
  props<{ user: rootIntfs.IAuthUser; token: rootIntfs.IAuthToken }>(),
);
export const SIGNIN_FAILURE = createAction(
  '[Current User] SIGNIN_FAILURE',
  props<{ error: any }>(),
);

export const CHECK_TOKEN = createAction('[Current User] CHECK_TOKEN');
export const CHECK_TOKEN_SUCCESS = createAction(
  '[Current User] CHECK_TOKEN_SUCCESS',
);
export const CHECK_TOKEN_FAILURE = createAction(
  '[Current User] CHECK_TOKEN_FAILURE',
  props<{ error: any }>(),
);

export const REFRESH_TOKEN = createAction('[Current User] REFRESH_TOKEN');
export const REFRESH_TOKEN_SUCCESS = createAction(
  '[Current User] REFRESH_TOKEN_SUCCESS',
  props<{ token: rootIntfs.IAuthToken }>(),
);
export const REFRESH_TOKEN_FAILURE = createAction(
  '[Current User] REFRESH_TOKEN_FAILURE',
  props<{ error: any }>(),
);

export const CHANGE_PASSWORD = createAction(
  '[Current User] CHANGE_PASSWORD',
  props<{ password: string; newPassword: string }>(),
);
export const CHANGE_PASSWORD_SUCCESS = createAction(
  '[Current User] CHANGE_PASSWORD_SUCCESS',
);
export const CHANGE_PASSWORD_FAILURE = createAction(
  '[Current User] CHANGE_PASSWORD_FAILURE',
  props<{ error: any }>(),
);

export const AUTHENTICATE = createAction('[Current User] AUTHENTICATE');
export const AUTHENTICATED = createAction('[Current User] AUTHENTICATED');
export const NO_AUTHENTICATED = createAction('[Current User] NO_AUTHENTICATED');

export const LOAD_USER_PROFILE = createAction(
  '[Current User] LOAD_USER_PROFILE',
);
export const LOAD_USER_PROFILE_SUCCESS = createAction(
  '[Current User] LOAD_USER_PROFILE_SUCCESS',
  props<{ user: rootIntfs.IAuthUser }>(),
);
export const LOAD_USER_PROFILE_FAILURE = createAction(
  '[Current User] LOAD_USER_PROFILE_FAILURE ',
  props<{ error: any }>(),
);

export const LOGOUT = createAction('[Current User] LOGOUT');
export const LOGOUT_SUCCESS = createAction('[Current User] LOGOUT_SUCCESS');
export const LOGOUT_FAILURE = createAction(
  '[Current User] LOGOUT_FAILURE',
  props<{ error: any }>(),
);
export const CLEAR_STATE_AFTER_LOGOUT = createAction(
  '[Current User] CLEAR_STATE_AFTER_LOGOUT',
);

export const SET_IS_AUTHENTICATED = createAction(
  '[Current User] SET_IS_AUTHENTICATED',
  props<{ isAuthenticated: boolean }>(),
);
export const SET_IS_USER_SESSION_CHECKED = createAction(
  '[Current User] SET_IS_USER_SESSION_CHECKED',
  props<{ isChecked: boolean }>(),
);
export const SET_TOKEN = createAction(
  '[Current User] SET_TOKEN',
  props<{ token: rootIntfs.IAuthToken }>(),
);
export const SET_USER = createAction(
  '[Current User] SET_USER',
  props<{ user: rootIntfs.IAuthUser }>(),
);

@Injectable({
  providedIn: 'root',
})
export class CurrentUserActionsService {
  constructor(private store: Store<IAppState>) {}
  authenticate(): void {
    this.store.dispatch(AUTHENTICATE());
  }

  refreshTokenSuccess(token: rootIntfs.IAuthToken): void {
    this.store.dispatch(REFRESH_TOKEN_SUCCESS({ token }));
  }

  refreshTokenFailure(error: any): void {
    this.store.dispatch(REFRESH_TOKEN_FAILURE({ error }));
  }

  signin(email: string, password: string): void {
    this.store.dispatch(SIGNIN({ email, password }));
  }

  logout(): void {
    this.store.dispatch(LOGOUT());
  }

  clearCurrUserStateAfterLogout(): void {
    this.store.dispatch(CLEAR_STATE_AFTER_LOGOUT());
  }

  signup(email: string, password: string, recaptcha: string): void {
    this.store.dispatch(SIGNUP({ email, password, recaptcha }));
  }

  changePassword(password: string, newPassword: string): void {
    this.store.dispatch(CHANGE_PASSWORD({ password, newPassword }));
  }

  setIsAuthenticated(isAuthenticated: boolean): void {
    this.store.dispatch(SET_IS_AUTHENTICATED({ isAuthenticated }));
  }

  setIsUserSessionChecked(isChecked: boolean): void {
    this.store.dispatch(SET_IS_USER_SESSION_CHECKED({ isChecked }));
  }

  setUser(user: rootIntfs.IAuthUser): void {
    this.store.dispatch(SET_USER({ user }));
  }

  setToken(token: rootIntfs.IAuthToken): void {
    this.store.dispatch(SET_TOKEN({ token }));
  }
}
