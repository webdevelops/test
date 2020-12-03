// Angular
import { Injectable } from '@angular/core';

// Libs
import { Observable } from 'rxjs';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

// App
import { productFeatureKey } from './product.reducer';
import { productAdapter, ProductState } from './product.state';
import { ProductModel } from '../../models/product.model';
import { map } from 'rxjs/operators';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

const { selectIds, selectEntities, selectAll, selectTotal } = productAdapter.getSelectors();

export const getSelectedProductId = (state: ProductState) => state.selectedProductId;

export const selectProductIds = createSelector(
    selectProductState,
    selectIds
);

export const selectProductEntities = createSelector(
    selectProductState,
    selectEntities
);

export const selectAllProducts = createSelector(
    selectProductState,
    selectAll
);

export const selectProductTotal = createSelector(
    selectProductState,
    selectTotal
);

export const selectError = createSelector(
    selectProductState,
    (state: ProductState) => state.error,
);

export const selectProductById = (id: string) => createSelector(
    selectProductEntities,
    entities => entities[id]
);

export const selectCurrentProductId = createSelector(
    selectProductState,
    getSelectedProductId
);

export const selectCurrentProduct = createSelector(
    selectProductEntities,
    selectCurrentProductId,
    (productEntities, productId) => productEntities[productId]
);

export const selectPage = createSelector(
    selectProductState,
    (state: ProductState) => state.page,
);

export const selectNextPage = createSelector(
    selectProductState,
    (state: ProductState) => state.page,
);

export const selectLastDownloadedId = createSelector(
    selectProductState,
    (state: ProductState) => state.lastDownloadedProductId
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

    public selectRandomProductList$(count: number): Observable<ProductModel[]> {
      return this.selectAllProducts$().pipe(
        map(productList => {
          const randomProducts = new Set();
          const maxRandomCount = Math.min(productList.length, count);
          while (maxRandomCount > randomProducts.size) {
            const randomIndex = Math.round(Math.random() * productList.length);
            if (productList[randomIndex]) {
              randomProducts.add( productList[randomIndex] );
            }
          }
          return Array.from(randomProducts) as ProductModel[];
        })
      );
    }

    public selectProductTotal$(): Observable<number> {
        return this.store$.select(selectProductTotal);
    }

    public selectProductById$(id: string): Observable<ProductModel> {
        return this.store$.select(selectProductById(id));
    }

    public selectCurrentProductId$(): Observable<string> {
        return this.store$.select(selectCurrentProductId);
    }

    public selectCurrentProduct$(): Observable<ProductModel> {
        return this.store$.select(selectCurrentProduct);
    }

    public selectPage$(): Observable<number> {
        return this.store$.select(selectPage);
    }

    public selectNextPage$(): Observable<number> {
        return this.store$.select(selectNextPage);
    }

    public selectLastDownloadedId$(): Observable<number> {
        return this.store$.select(selectLastDownloadedId);
    }

    public selectError$(): Observable<string | TypeError> {
        return this.store$.select(selectError);
    }
    public selectLoading$(): Observable<boolean> {
        return this.store$.select(selectLoading);
    }
}
