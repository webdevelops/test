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


  // on(ProductActions.LOAD_PRODUCT_BY_ID_SUCCESS, (state, { product }) => {
  //   console.log("product", product)
  //   console.log("state", state)
  //   return ({ ...productAdapter.upsertOne(product, state) })
  // }),
  // on(ProductActions.LOAD_PRODUCT_BY_ID_FAILURE, (state, { error }) => {
  //   console.log("error-FAILURE", error)

  //   return ({
  //     ...state, error: error.message
  //   })
  // }),
);