// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Libs
import { Observable, of, from } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';
import { LocalStorageService } from './local-storage.service';
// import {}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(
    private firestore: AngularFirestore,
    private localStorage: LocalStorageService
  ) { }

  addToCart(product: ProductModel): Observable<void> {
    let products = this.localStorage.productsFromBasket;

    products = this.localStorage.get('basket');
    products.push(product);

    this.localStorage.set('basket', products);

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
    let products = this.localStorage.productsFromBasket;

    products = this.localStorage.get('basket');
    products = products.filter(product => product.productId !== productId);

    this.localStorage.set('basket', products);

    return from(this.firestore
      .collection('basket')
      .doc(`${productId}`)
      .delete()
    )
  }

  updateStorage() {

  }
}