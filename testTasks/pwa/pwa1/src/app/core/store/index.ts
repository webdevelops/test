// Libs
import { ActionReducerMap } from '@ngrx/store';

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