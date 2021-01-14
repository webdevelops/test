// ang
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// libs
import { Observable } from 'rxjs';

import * as rootIntfs from '@app/interfaces';
// app
import { INTERSEPTOR_KEYS } from '@app-core/types/interseptor-keys.type';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private _http: HttpClient) {}

  // LOGIN

  signin(
    data: rootIntfs.ISigninRequest,
  ): Observable<rootIntfs.ISigninResponse> {
    const url: string = '/api/auth/login';
    let params: HttpParams = new HttpParams();
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_JWT, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_REFRESH_TOKEN, '');

    return this._http.post<rootIntfs.ISigninResponse>(url, data, { params });
  }

  // REGISTRATION

  signup(
    data: rootIntfs.ISignupRequest,
  ): Observable<rootIntfs.ISignupResponse> {
    const url: string = '/api/auth/registration';
    let params: HttpParams = new HttpParams();
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_JWT, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_REFRESH_TOKEN, '');

    return this._http.post<rootIntfs.ISignupResponse>(url, data, { params });
  }

  // SESSION

  checkSession(
    data: rootIntfs.ICheckSessionRequest,
  ): Observable<rootIntfs.ICheckSessionResponse> {
    const url: string = '/api/auth/check-session';
    let params: HttpParams = new HttpParams();
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_JWT, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_REFRESH_TOKEN, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_HTTP_ERROR, '');

    return this._http.post<rootIntfs.ICheckSessionResponse>(url, data, {
      params,
    });
  }

  refreshSession(
    data: rootIntfs.IRefreshSessionRequest,
  ): Observable<rootIntfs.IRefreshSessionResponse> {
    const url: string = '/api/auth/refresh-session';
    let params: HttpParams = new HttpParams();
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_JWT, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_REFRESH_TOKEN, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_HTTP_ERROR, '');

    return this._http
      .post<rootIntfs.IRefreshSessionResponse>(url, data, {
        params,
      })
      .pipe();
  }

  // LOGOUT

  logout(): Observable<void> {
    const url: string = '/api/auth/logout';
    let params: HttpParams = new HttpParams();
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_REFRESH_TOKEN, '');
    params = params.set(INTERSEPTOR_KEYS.WITHOUT_HTTP_ERROR, '');

    return this._http.post<void>(url, null, {
      params,
    });
  }
}
