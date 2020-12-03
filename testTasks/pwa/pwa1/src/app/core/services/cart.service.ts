// Angular
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  loadCart(): Observable<Array<ProductModel>> {
    return new Observable(subscriber => {
      subscriber.complete();  // do nothing... now initialization provided by ngrx-store-localstorage, see localStorageSyncReducer
    });
  }

}
