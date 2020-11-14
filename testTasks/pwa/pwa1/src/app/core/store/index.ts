// Libs
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

// App
import { ProductState } from './product/product.state';
import { productReducer } from './product/product.reducers';
import { BasketState } from './basket/basket.state';
import { basketReducer } from './basket/basket.reducers';

export interface RootState {
  product: ProductState;
  basket: BasketState;
}

export const reducers: ActionReducerMap<RootState> = {
  product: productReducer,
  basket: basketReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ 
    keys: ['basket'],
    storageKeySerializer: (key) => `upwork_${key}`,
    rehydrate: true,
})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];