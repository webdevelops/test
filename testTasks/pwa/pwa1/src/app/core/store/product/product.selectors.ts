// Angular
import { Injectable } from '@angular/core';

// Libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// App
import { ProductState } from './product.state';
import { productFeatureKey } from './product.reducers';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey)

export const selectLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading,
);

@Injectable({
  providedIn: 'root'
})
export class ProductSelectors {
  constructor(private store$: Store<ProductState>) { }

  public selectLoading$(): Observable<boolean> {
    return this.store$.select(selectLoading);
  }
}