// Libs
import { createReducer, on } from '@ngrx/store';

// App
import { initialCartState } from './cart.state';
import * as CartActions from './cart.actions';
import { productAdapter } from '../product/product.state';
import { state } from '@angular/animations';

export const cartFeatureKey = 'cart';

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.ADD_PRODUCT_TO_CART, (state, { product }) => ({
    ...productAdapter.upsertOne(product, state)
  })),
  on(CartActions.REMOVE_PRODUCT_FROM_CART, (state, { product }) => ({
    ...productAdapter.removeOne(product.productId, state)
  })),
);