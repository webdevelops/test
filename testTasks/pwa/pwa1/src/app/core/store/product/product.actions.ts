// Angular
import { Injectable } from '@angular/core';

// Libs
import { createAction, props, Store } from '@ngrx/store';

// App
import { RootState } from './../index';

export const SHOW_LOADER = createAction(
  '[LOading] Show Loader',
);

export const HIDE_LOADER = createAction(
  '[Loading] Hide Loader',
);

export const PRODUCT_LIST_LOAD = createAction(
  '[Product] Load Product List',
  props<{ itemCountToLoad: number }>()
);

@Injectable({
  providedIn: 'root',
})
export class ProductActions {
  constructor(private store$: Store<RootState>) { }

  public loadProductList(itemCountToLoad: number): void {
    this.store$.dispatch(PRODUCT_LIST_LOAD({ itemCountToLoad }));
  }
}