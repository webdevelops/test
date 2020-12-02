import {createAction, props, Store} from '@ngrx/store';

import { ProductModel } from '../../models/product.model';
import {Injectable} from '@angular/core';
import {RootState} from '../index';

export const LOAD_CART = createAction(
  '[CART] Load Cart'
);

export const LOAD_CART_SUCCESS = createAction(
  '[CART] Load Cart Success',
  props<{ productList: ProductModel[] }>()
);

export const LOAD_CART_FAILURE = createAction(
  '[CART] Load Cart Failure',
  props<{ error: TypeError }>()
);

export const ADD_PRODUCT_TO_CART = createAction(
  '[CART] Add Product to Cart',
  props<{ product: ProductModel }>()
);

export const ADD_PRODUCT_LIST_TO_CART = createAction(
  '[CART] Add Product List to Cart',
  props<{ productList: ProductModel[] }>()
);

export const DELETE_PRODUCT_FROM_CART = createAction(
  '[CART] Delete Product from Cart',
  props<{ product: ProductModel }>()
);

export const DELETE_PRODUCT_LIST_FROM_CART = createAction(
  '[CART] Delete Product List from Cart',
  props<{ productList: ProductModel[] }>()
);

export const CLEAR_CART = createAction(
  '[CART] Clear Cart'
);



@Injectable({
  providedIn: 'root',
})
export class CartActions {
  constructor(private store$: Store<RootState>) { }

  public loadCart(): void {
    this.store$.dispatch(LOAD_CART());
  }

  public addProductToCart(product: ProductModel): void {
    this.store$.dispatch(ADD_PRODUCT_TO_CART({ product }));
  }

  public addProductsToCart(productList: ProductModel[]): void {
    this.store$.dispatch(ADD_PRODUCT_LIST_TO_CART({ productList }));
  }

  public deleteProductFromCart(product: ProductModel): void {
    this.store$.dispatch(DELETE_PRODUCT_FROM_CART({ product }));
  }

  public deleteProductsFromCart(productList: ProductModel[]): void {
    this.store$.dispatch(DELETE_PRODUCT_LIST_FROM_CART({ productList }));
  }

  public clearCart(): void {
    this.store$.dispatch(CLEAR_CART());
  }
}
