// Angular
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

// App
import { CartState } from './cart.state';
import { ProductModel } from '../../models/product.model';
import { productAdapter } from '../product/product.state';
import { cartFeatureKey } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();


export const selectCartProductIds = createSelector(
  selectCartState,
  selectIds
);

export const selectCartProductEntities = createSelector(
  selectCartState,
  selectEntities
);

export const selectCartAllProducts = createSelector(
  selectCartState,
  selectAll
);

export const selectCartProductTotal = createSelector(
  selectCartState,
  selectTotal
);

export const selectCartError = createSelector(
  selectCartState,
  (state: CartState) => state.error
);

export const selectCartProductById = (id: string) => createSelector(
  selectCartProductEntities,
  entities => entities[id]
);

export const selectCartLoading = createSelector(
  selectCartState,
  (state: CartState) => state.isLoading
);

@Injectable({
  providedIn: 'root'
})
export class CartSelectors {
  constructor(private store$: Store<CartState>) { }

  public getCountProducts$(): Observable<number> {
    return this.store$.select(selectCartProductTotal);
  }

  public selectAllProducts$(): Observable<ProductModel[]> {
    return this.store$.select(selectCartAllProducts);
  }

  public selectProductById$(id: string): Observable<ProductModel> {
    return this.store$.select(selectCartProductById(id));
  }

  public selectError$(): Observable<string | TypeError> {
    return this.store$.select(selectCartError);
  }
  public selectLoading$(): Observable<boolean> {
    return this.store$.select(selectCartLoading);
  }
}
