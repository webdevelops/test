// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { response } from 'express';

// Libs
// import { Observable, of } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(private firestore: AngularFirestore) { }

  addToCart(product: ProductModel) {
    return this.firestore
      .collection('basket')
      // .doc(`${product.productId}`)
      .doc(`pro-basket`)
      .set(product)
      .then(product => product)
      .catch(error => console.log('Error: ', error))
  }
}