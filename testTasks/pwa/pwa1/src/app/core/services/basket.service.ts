// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Libs
import { Observable, of, from } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(private firestore: AngularFirestore) { }

  addToCart(product: ProductModel): Observable<void> {
    return from(this.firestore
      .collection('basket')
      .doc(`${product.productId}`)
      .set(product))
      // .then(() => console.log('Product added!'))
      // .catch(error => console.log('Error: ', error))
  }
  

  // addToCart(product: ProductModel): Observable<boolean> {
  //   return of(true);
  // }

  // ----------------------------------

  removeFromCart(productId: string): Observable<void> {
    return from(this.firestore
      .collection('basket')
      .doc(`${productId}`)
      .delete()
    )
  }
}