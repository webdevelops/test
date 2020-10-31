// Angular
import { Injectable } from '@angular/core';

// Libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// App
import { productAdapter, ProductState, selectProductId } from './product.state';
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

export const selectProductEntities = createSelector(
  selectProductState,
  selectEntities
);

export const selectProductById = (id: string) => createSelector(
  selectProductEntities,
  entities => entities[id]
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

  public selectProductById$(id: string): Observable<ProductModel> {
    // console.log("ProductSelectors -> constructor -> id", id)
    return this.store$.select(selectProductById(id));
  }
}