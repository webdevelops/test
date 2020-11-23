// Angular
import { Injectable } from '@angular/core';

// Libs
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

// App
import { CartState } from './cart.state';
import { cartFeatureKey } from './cart.reducers';
import { productAdapter } from '../product/product.state';
import { ProductModel } from '../../models/product.model';
import { selectProductById } from '../product/product.selectors';

const { selectTotal, selectAll, selectEntities } = productAdapter.getSelectors()

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCartProductTotal = createSelector(
  selectCartState,
  selectTotal
);

export const selectAllCartProducts = createSelector(
  selectCartState,
  selectAll
);

export const selectCartProductEntities = createSelector(
  selectCartState,
  selectEntities
);

export const selectCartProductById = (id: string) => createSelector(
  selectCartProductEntities,
  entities => entities[id]
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
    return this.store$.select(selectAllCartProducts);
  }

  public selectProductById$(id: string): Observable<ProductModel> {
    return this.store$.select(selectCartProductById(id));
  }
}