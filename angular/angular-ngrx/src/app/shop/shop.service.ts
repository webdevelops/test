import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ShopService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://online-shop-faba7.firebaseio.com//products.json');
  }
}