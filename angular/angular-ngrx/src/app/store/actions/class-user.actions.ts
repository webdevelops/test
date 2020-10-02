import { Action } from '@ngrx/store';
import { User } from 'src/app/core/models';

export enum EUserActions {
  GetUser = '[User] User',
  GetUserSuccess = '[User] Get User Success',
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success'
};

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: User[]) { }
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: User) { }
}

export type UserActions = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess