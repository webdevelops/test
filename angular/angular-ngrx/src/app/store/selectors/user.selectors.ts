import { createSelector } from '@ngrx/store';

import { AppState } from "../states/app.state";
import { UserState } from '../states/user.state';

const selectUsers = (state: AppState) => state.users;
// console.log("state.users", selectUsers)

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);