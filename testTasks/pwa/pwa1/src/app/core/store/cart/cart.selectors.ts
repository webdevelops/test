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

const { selectTotal, selectAll } = productAdapter.getSelectors()

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectCartProductTotal = createSelector(
  selectCartState,
  selectTotal
);

export const selectAllCartProducts = createSelector(
  selectCartState,
  selectAll
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
}