// Angular
import { Injectable } from '@angular/core';

// Libs
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// App
import { productAdapter, ProductState, selectProductId } from './product.state';
import { productFeatureKey } from './product.reducers';
import { ProductModel } from '../../models/product.model';
import { map } from 'rxjs/operators';

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

export const selectPage = createSelector(
  selectProductState,
  (state: ProductState) => state.page
);

export const selectLastDownloadedId = createSelector(
  selectProductState,
  (state: ProductState) => state.lastDownloadedProductId
);

export const selectProductIds = createSelector(
  selectProductState,
  selectIds
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
    return this.store$.select(selectProductById(id));
  }

  public selectPage$(): Observable<number> {
    return this.store$.select(selectPage);
  }

  public selectLastDownloadedId$(): Observable<number> {
    return this.store$.select(selectLastDownloadedId);
  }

  public selectProductIds$(): Observable<string[] | number[]> {
    return this.store$.select(selectProductIds);
  }

  public selecRandomProductList$(count: number): Observable<ProductModel[]> {
    return this.selectAllProducts$().pipe(
      map(productList => {
        const randomProducts = new Set();
        const maxRandomCount = Math.min(productList.length, count);

        while (maxRandomCount > randomProducts.size) {
          const randomIndex = Math.round(Math.random() * productList.length);

          if (productList[randomIndex]) {
            randomProducts.add(productList[randomIndex]);
          }
        }
        return Array.from(randomProducts) as ProductModel[];
      })
    )
  }
}