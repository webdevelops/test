// Angular
import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

// Libs
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  loadProductList(itemCountToLoad: number): Observable<Array<ProductModel>> {
    console.log("ProductService -> constructor -> itemCountToLoad", itemCountToLoad)
    return this.firestore.collection('product-list', ref =>
      ref.orderBy('productId', 'asc').limit(itemCountToLoad)
    ).valueChanges()
      .pipe(
        map((response: ProductModel[]) => {
          return response;
        })
      )
  }

}