// Libs
import { createReducer, on } from '@ngrx/store';

// App
import * as ProductActions from './product.actions';
import { initialProductState, productAdapter } from './product.state';

export const productFeatureKey = 'product';

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.PRODUCT_LIST_LOAD_SUCCESS, (state, { productList, lastDownloadedProductId }) => ({
    ...productAdapter.setAll(productList, state), lastDownloadedProductId
  })),
  on(ProductActions.PRODUCT_LIST_LOAD_FAILURE, (state, { error }) => ({
    ...state, error: error.message
  })),
  on(ProductActions.LOAD_NEXT_PAGE_SUCCESS, (state, { productList, page, lastDownloadedProductId }) => ({
    ...productAdapter.upsertMany(productList, state), page, lastDownloadedProductId
  })),
  on(ProductActions.LOAD_NEXT_PAGE_FAILURE, (state, { error }) => ({
    ...state, error: error.message
  })),
  on(ProductActions.LOAD_PRODUCT_BY_ID_SUCCESS, (state, { product }) => ({
    ...productAdapter.upsertOne(product, state)
  })),
  on(ProductActions.LOAD_PRODUCT_BY_ID_FAILURE, (state, { error }) => ({
    ...state, error: error.message
  })),
  on(ProductActions.SHOW_LOADER, state => ({
    ...state, isLoading: true
  })),
  on(ProductActions.HIDE_LOADER, state => ({
    ...state, isLoading: false
  })),
);
