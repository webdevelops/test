import { User } from 'src/app/core/models';

export interface UserState {
  users: User[];
  selectedUser: User;
}

export const initialState: UserState = {
  users: null,
  selectedUser: null
};