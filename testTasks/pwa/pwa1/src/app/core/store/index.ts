// Libs
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

// App
import { ProductState } from './product/product.state';
import { productReducer } from './product/product.reducers';
import { BasketState } from './basket/basket.state';
import { basketReducer } from './basket/basket.reducers';
import { CartState } from './cart/cart.state';
import { cartReducer } from './cart/cart.reducers';

export interface RootState {
  product: ProductState;
  cart: CartState;
  basket: BasketState;
}

export const reducers: ActionReducerMap<RootState> = {
  product: productReducer,
  cart: cartReducer,
  basket: basketReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ 
    keys: ['cart'],
    storageKeySerializer: (key) => `upwork_${key}`,
    rehydrate: true,
})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];