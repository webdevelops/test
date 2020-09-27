import { User } from 'src/app/core/models';

export interface UserState {
  users: User[];
  selectedUser: User;
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null
};