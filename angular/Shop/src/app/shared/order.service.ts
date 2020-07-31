import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  create(order) {
    return this.http.post(`${environment.fbDbUrl}/orders.json`, order)
      .pipe(
        map((res: FbResponse) => {
          return {
            ...order,
            id: res.name,
            // date: new Date(order.date)  // ----- only '{name: -H***}' comes from the server
          }
        })
      )
  }
}
