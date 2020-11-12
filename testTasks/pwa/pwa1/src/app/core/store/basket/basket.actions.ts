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

export const REMOVE_FROM_CART = createAction(
  '[Basket] Remove From Cart',
  props<{ productId: string }>()
);

export const REMOVE_FROM_CART_SUCCESS = createAction(
  '[Basket] Remove From Cart Success',
  props<{ productId: string }>()
);

export const REMOVE_FROM_CART_FAILURE = createAction(
  '[Basket] Remove From Cart Feilure',
  props<{ error: TypeError }>()
);

export const ADD_CART_TO_LOCAL_STORAGE = createAction(
  '[Basket] Add To Cart From Local Storage',
  props<{ products: ProductModel[]}>()
);

@Injectable({
  providedIn: 'root'
})
export class BasketActions {
  constructor(private store$: Store<RootState>) { }

  public addToCart(product: ProductModel) {
    this.store$.dispatch(ADD_TO_CART({ product }));
  }

  public removeFromCart(productId: string) {
    this.store$.dispatch(REMOVE_FROM_CART({ productId }));
  }

  public addCartToLocalStorage(products: ProductModel[]) {
    this.store$.dispatch(ADD_CART_TO_LOCAL_STORAGE({products}));
  }
}