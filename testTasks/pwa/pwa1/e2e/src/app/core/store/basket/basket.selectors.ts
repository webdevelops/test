// Angular
import { Injectable } from '@angular/core';

// Libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

// App
import { basketAdapter, BasketState } from './basket.state';
import { basketFeatureKey } from './basket.reducers';

const { selectAll } = basketAdapter.getSelectors();

export const selectBasketState = createFeatureSelector<BasketState>(basketFeatureKey);

export const selectAllProductsFromBasket = createSelector(
  selectBasketState,
  selectAll
);

@Injectable({
  providedIn: 'root'
})
export class BasketSelectors {
  constructor(private store$: Store<BasketState>) { }

  public selectAllProductsFromBasket$(): Observable<ProductModel[]> {
    return this.store$.select(selectAllProductsFromBasket);
  }
}