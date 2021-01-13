import { IAuthToken } from '../models/auth-token.interface';
import { IAuthUser } from '../models/auth-user.interface';

export interface ISignupRequest {
  email: string;
  password: string;
  recaptcha: string;
}

export interface ISignupResponse {
  user: IAuthUser;
  jwt: IAuthToken;
  newNotificCount: number;
}
