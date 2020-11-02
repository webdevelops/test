// Libs
import { createReducer } from '@ngrx/store';

// App
import { initialBasketState } from './basket.state';

export const basketReducer = createReducer(
  initialBasketState
);