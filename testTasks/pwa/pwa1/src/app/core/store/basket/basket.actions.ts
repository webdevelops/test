// Angular
import { Injectable } from '@angular/core';

// Libs
import { createAction, props, Store } from '@ngrx/store';

// App
import { RootState } from '../index';
import { ProductModel } from '../../models/product.model';

export const ADD_TO_CART = createAction(
  '[Basket] Add To Cart',
  props<{ product: ProductModel }>()
);

export const ADD_TO_CART_SUCCESS = createAction(
  '[Basket] Add To Cart Success',
  props<{ product: ProductModel }>()
);

export const ADD_TO_CART_FAILURE = createAction(
  '[Basket] Add To Cart Failure',
  props<{ error: TypeError }>()
);

@Injectable({
  providedIn: 'root'
})
export class BasketActions {
  constructor(private store$: Store<RootState>) { }

  public addToCart(product: ProductModel) {
    this.store$.dispatch(ADD_TO_CART({ product }));
  }
}