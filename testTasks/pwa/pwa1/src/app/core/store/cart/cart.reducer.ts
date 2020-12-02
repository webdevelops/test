// Libs
import { createReducer, on } from '@ngrx/store';

// App
import * as CartActions from './cart.actions';
import { initialCartState } from './cart.state';
import { productAdapter } from '../product/product.state';

export const cartFeatureKey = 'cart';

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.LOAD_CART_SUCCESS,
    (state, { productList }) => ({
      ...productAdapter.setAll(productList, state)
    })
  ),
  on(CartActions.ADD_PRODUCT_TO_CART, (state, { product }) => ({
    ...productAdapter.upsertOne(product, state)
  })),
  on(CartActions.ADD_PRODUCT_LIST_TO_CART, (state, { productList }) => ({
    ...productAdapter.upsertMany(productList, state)
  })),
  on(CartActions.DELETE_PRODUCT_FROM_CART, (state, { product }) => ({
    ...productAdapter.removeOne(product.productId, state)
  })),
  on(CartActions.DELETE_PRODUCT_LIST_FROM_CART, (state, { productList }) => ({
    ...productAdapter.removeMany(productList.map(p => p.productId), state)
  })),
  on(CartActions.CLEAR_CART,
    state => productAdapter.removeAll(state)
  )
);
