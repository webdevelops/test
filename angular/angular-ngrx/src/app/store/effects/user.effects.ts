import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { EUserActions, GetUser, GetUserSuccess } from '../actions/user.actions';
import { selectUserList } from '../selectors/user.selectors';
import { AppState } from '../states/app.state';

@Injectable()
export class UsserEffect {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),   // https://ngrx.io/guide/effects/operators
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),  // https://ngrx.io/api/store/select
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  getUsers$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUsers),
    // switchMap(() => this.userService.getUsers()),
    // switchMap((userHttp: UserHttp) => of(new GetUserSuccess(userHttp.users)))
  );

  constructor(
    // private userService: UserService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}