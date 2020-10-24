// Angular
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  loadProductList(itemCountToLoad: number): Observable<Array<ProductModel>> {
    return this.firestore.collection('product-list', ref =>
      ref.orderBy('productId', 'asc').limit(itemCountToLoad)
    ).valueChanges()
      .pipe(
        map((response: ProductModel[]) => {
          return response;
        })
      );
  }

  loadNextPage(lastDownloadedProductId: number, itemCountToLoad: number): Observable<Array<ProductModel>> {
    return this.firestore.collection('product-list', ref =>
      ref.orderBy('productId', 'asc').startAfter(lastDownloadedProductId).limit(itemCountToLoad))
      .valueChanges().pipe(
        map((response: ProductModel[]) => {
          return response;
        })
      );
  }

  loadProductById(id: string): Observable<ProductModel> {
    if (id !== undefined) {
      return this.firestore.collection('product-list', ref => {
        return ref.where('productId', '==', +id).limit(1);
      }).valueChanges()
        .pipe(
          map((result: ProductModel[]) => result[0])
        );
    }
  }
}
