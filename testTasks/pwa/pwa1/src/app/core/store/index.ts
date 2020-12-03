// Libs
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

// App
import { productReducer } from './product/product.reducer';
import { ProductState } from './product/product.state';
import { cartReducer } from './cart/cart.reducer';
import { CartState } from './cart/cart.state';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface RootState {
  product: ProductState;
  cart: CartState;
}

export const reducers: ActionReducerMap<RootState> = {
  product: productReducer,
  cart: cartReducer
};

// synchronize LocalStorage with Cart state
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['cart'],
    rehydrate: true,
    checkStorageAvailability: true  // should be True for SSR and PWA modes
  })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
