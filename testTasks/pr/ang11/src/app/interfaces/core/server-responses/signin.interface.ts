import * as rootIntfs from '@app/interfaces';

export interface ISigninRequest {
  email: string;
  password: string;
}

export interface ISigninResponse {
  user: rootIntfs.IAuthUser;
  jwt: rootIntfs.IAuthToken;
}
