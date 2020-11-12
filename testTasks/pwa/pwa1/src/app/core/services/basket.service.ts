// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Libs
import { Observable, of, from } from 'rxjs';

// App
import { ProductModel } from '../models/product.model';
import { LocalStorageService } from './local-storage.service';
import { BasketActions } from '../store/basket/basket.actions';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(
    private firestore: AngularFirestore,
    private localStorage: LocalStorageService,
    private basketActions: BasketActions
  ) { }

  putCartFromLoalStoregeToStore() {
    if (this.localStorage.get('basket')) {
      const productsFromBasket = this.localStorage.get('basket');
      this.basketActions.fromLoalStoregeToStore(productsFromBasket);
    }
  }

  addToCart(product: ProductModel): Observable<void> {
    this.addToLocalStorage(product);

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
    this.removeFromLocalStorage(productId);

    return from(this.firestore
      .collection('basket')
      .doc(`${productId}`)
      .delete()
    )
  }

  addToLocalStorage(product: ProductModel): void {
    let products: ProductModel[] = [];

    if (this.localStorage.get('basket')) {
      products = this.localStorage.get('basket');
    }

    products.push(product);

    this.localStorage.set('basket', products);
  }

  removeFromLocalStorage(productId: string): void {
    let products: ProductModel[];

    if (this.localStorage.get('basket')) {
      products = this.localStorage.get('basket');
      products = products.filter(product => product.productId !== productId);
    }

    if (products.length === 0) {
      this.localStorage.remove('basket');

    } else {
      this.localStorage.set('basket', products);
    }
  }
}