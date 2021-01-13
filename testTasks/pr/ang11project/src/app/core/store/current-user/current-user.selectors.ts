// ang
import { Injectable } from '@angular/core';

// libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NGRX_STATE_NAMES } from '@app/app.config';
// app
import * as rootIntfs from '@app/interfaces';
import { IAppState } from '@app/store/app.state';
import { ICurrentUserState } from './current-user.state';

export const selectCurrentUserState = createFeatureSelector<ICurrentUserState>(
  NGRX_STATE_NAMES.CORE_CURRENT_USER,
);

export const selectIsAuthenticated = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state.isAuthenticated,
);

export const selectIsUserSessionChecked = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state.isUserSessionChecked,
);

export const selectState = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state,
);

export const selectUser = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state.user,
);

export const selectToken = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state.token,
);

export const selectUserAndToken = createSelector(
  selectCurrentUserState,
  ({ user, token }: ICurrentUserState) => ({ user, token }),
);

export const selectError = createSelector(
  selectCurrentUserState,
  (state: ICurrentUserState) => state.error,
);

@Injectable({
  providedIn: 'root',
})
export class CurrentUserSelectorsService {
  constructor(private store: Store<IAppState>) {}

  selectIsAuthenticated(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated);
  }

  // auth user
  selectUser(): Observable<rootIntfs.IAuthUser | null> {
    return this.store.select(selectUser);
  }

  // auth token
  selectToken(): Observable<rootIntfs.IAuthToken | null> {
    return this.store.select(selectToken);
  }

  // auth user & token
  selectUserAndToken(): Observable<Pick<ICurrentUserState, 'user' | 'token'>> {
    return this.store.select(selectUserAndToken);
  }
}
