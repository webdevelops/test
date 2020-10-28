// Angular
import { Injectable } from '@angular/core';

// Libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// App
import { productAdapter, ProductState } from './product.state';
import { productFeatureKey } from './product.reducers';
import { ProductModel } from '../../models/product.model';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey)

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

export const selectAllProducts = createSelector(
  selectProductState,
  selectAll
);

export const selectLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading,
);

@Injectable({
  providedIn: 'root'
})
export class ProductSelectors {
  constructor(private store$: Store<ProductState>) { }

  public selectAllProducts$(): Observable<Array<ProductModel>> {
    return this.store$.select(selectAllProducts);
  }

  public selectLoading$(): Observable<boolean> {
    return this.store$.select(selectLoading);
  }
}