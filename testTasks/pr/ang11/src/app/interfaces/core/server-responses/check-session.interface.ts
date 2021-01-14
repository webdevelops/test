import { IAuthToken } from '../models/auth-token.interface';

export interface ICheckSessionRequest {
  accessToken: string;
  userId: string;
}

export type ICheckSessionResponse = void;

export interface IRefreshSessionRequest {
  refreshToken: string;
  userId: string;
}

export interface IRefreshSessionResponse {
  jwt: IAuthToken;
}
