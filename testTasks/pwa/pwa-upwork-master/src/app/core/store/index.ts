// Libs
import { ActionReducerMap } from '@ngrx/store';

// App
import { productReducer } from './product/product.reducer';
import { ProductState } from './product/product.state';

export interface RootState {
  product: ProductState;
}

export const reducers: ActionReducerMap<RootState> = {
  product: productReducer
};
