// app
import * as rootIntfs from '@app/interfaces';

export interface ICurrentUserState {
  isAuthenticated: boolean;
  isUserSessionChecked: boolean;
  token: rootIntfs.IAuthToken | null;
  user: rootIntfs.IAuthUser | null;
  error: any;
}

export const initialCurrentUserState: ICurrentUserState = {
  isAuthenticated: false,
  isUserSessionChecked: false,
  token: null,
  user: null,
  error: null,
};
