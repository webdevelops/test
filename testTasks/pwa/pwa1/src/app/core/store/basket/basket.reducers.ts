// Libs
import { createReducer, on } from '@ngrx/store';

// App
import { basketAdapter, initialBasketState } from './basket.state';
import * as BasketActions from './basket.actions';

export const basketFeatureKey = 'basket';

export const basketReducer = createReducer(
  initialBasketState,
  on(BasketActions.ADD_TO_CART_SUCCESS, (state, { product }) => ({
    ...basketAdapter.setOne(product, state)
  })),
  on(BasketActions.REMOVE_FROM_CART_SUCCESS, (state, { productId }) => ({
    ...basketAdapter.removeOne(productId, state)
  })),
  on(BasketActions.ADD_CART_TO_LOCAL_STORAGE, (state, {products}) => ({
    ...basketAdapter.setAll(products, state)
  })),
)