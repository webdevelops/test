import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log('params', params)
    return this.http.get(path, { params: params });
  }

  post(path, body) {
    return this.http.post(
      path,
      JSON.stringify(body)
    )
  }
}