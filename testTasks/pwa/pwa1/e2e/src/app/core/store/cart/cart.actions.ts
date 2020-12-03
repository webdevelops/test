// Angular
import { Injectable } from '@angular/core';

// Libs
import { Store, createAction, props } from '@ngrx/store';

// App
import { RootState } from '../index';
import { ProductModel } from '../../models/product.model';

export const ADD_PRODUCT_TO_CART = createAction(
  '[CART] Add Product To Cart',
  props<{ product: ProductModel }>()
);

export const REMOVE_PRODUCT_FROM_CART = createAction(
  '[PRODUCT] Remove Product From Cart',
  props<{ product: ProductModel }>()
);

@Injectable({
  providedIn: 'root'
})
export class CartActions {
  constructor(private store$: Store<RootState>) { }

  public addProductToCart(product: ProductModel): void {
    this.store$.dispatch(ADD_PRODUCT_TO_CART({ product }));
  }

  public removeProductFromCart(product: ProductModel): void {
    this.store$.dispatch(REMOVE_PRODUCT_FROM_CART({ product }));
  }
}