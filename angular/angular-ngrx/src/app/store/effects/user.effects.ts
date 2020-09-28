import { Injectable } from "@angular/core";
import { Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { EUserActions, GetUser } from '../actions/user.actions';

@Injectable()
export class UsserEffect {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload)
  )
}