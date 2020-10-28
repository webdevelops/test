// Libs
import { ActionReducerMap } from '@ngrx/store';

// App
import { ProductState } from './product/product.state';
import { productReducer } from './product/product.reducers';

export interface RootState {
  product: ProductState;
}

export const reducers: ActionReducerMap<RootState> = {
  product: productReducer
}