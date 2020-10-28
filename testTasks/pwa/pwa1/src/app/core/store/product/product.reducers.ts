// Libs
import { createReducer, on } from '@ngrx/store';

// App
import { initialProductState, productAdapter } from './product.state';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.PRODUCT_LIST_LOAD_SUCCESS, (state, { productList, lastDownloadedProductId }) => ({
    ...productAdapter.setAll(productList, state), lastDownloadedProductId
  })),
  on(ProductActions.PRODUCT_LIST_LOAD_FAILURE, (state, { error }) => ({
    ...state, error: error.message
  })),
  on(ProductActions.SHOW_LOADER, state => ({
    ...state, isLoading: true
  })),
  on(ProductActions.HIDE_LOADER, state => ({
    ...state, isLoading: false
  })),
);