// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Libs
import { Observable, of } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(private firestore: AngularFirestore) { }

  // addToCart(product: ProductModel): Observable<ProductModel> {
  //     return this.firestore
  //       .collection('basket')
  //       // .doc(`${product.productId}`)
  //       .doc(`pro-basket`)
  //       .set(product)
  //       .then(product => of(product))
  //       .catch(error => console.log('Error: ', error))
  //   }

  addToCart(product: ProductModel): Observable<boolean> {
    return of(true);
  }

  removeFromCart(productId: string): Observable<boolean> {
    return of(true);
  }
}