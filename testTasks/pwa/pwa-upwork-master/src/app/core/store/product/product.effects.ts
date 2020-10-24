// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom, take, filter, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// App
import { ProductService } from '../../services/product.service';
import * as ProductActions from './product.actions';
import { ProductSelectors } from './product.selectors';
import { ProductModel } from './../../models/product.model';

const BACKGROUND_LOAD_PRODUCT_LIST_ITEM_COUNT = 3;

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productListService: ProductService,
    private productSelectors: ProductSelectors,
  ) { }

  public showLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.PRODUCT_LIST_LOAD, ProductActions.LOAD_NEXT_PAGE),
      map(() => ProductActions.SHOW_LOADER()),
    ),
  );

  public loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.PRODUCT_LIST_LOAD),
      mergeMap((action) => this.productListService.loadProductList(action.itemCountToLoad)
        .pipe(
          switchMap((productList: Array<ProductModel>) => {
            const lastInResponse: number = +productList[productList.length - 1].productId;
            return [
              ProductActions.HIDE_LOADER(),
              ProductActions.PRODUCT_LIST_LOAD_SUCCESS({ productList, lastDownloadedProductId: lastInResponse })
            ];
          }
          ),
          catchError((error: TypeError) => of(ProductActions.PRODUCT_LIST_LOAD_FAILURE({ error }))),
        )
      )
    ),
  );

  public loadNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_NEXT_PAGE),
      withLatestFrom(this.productSelectors.selectPage$(), this.productSelectors.selectLastDownloadedId$()),
      mergeMap(([action, page, lastDownloadedProductId]) => {
        const nextPage: number = page + 1;
        return this.productListService.loadNextPage(lastDownloadedProductId, action.itemCountToLoad)
          .pipe(
            switchMap((productList: Array<ProductModel>) => {
              const lastInResponse: number = +productList[productList.length - 1].productId;
              return [
                ProductActions.HIDE_LOADER(),
                ProductActions.LOAD_NEXT_PAGE_SUCCESS({ productList, page: nextPage, lastDownloadedProductId: lastInResponse })
              ];
            })
          );
      }),
    ),
  );

  public loadProductListOnBackground$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.PRODUCT_LIST_LOAD_SUCCESS, ProductActions.LOAD_NEXT_PAGE_SUCCESS),
      withLatestFrom(this.productSelectors.selectLastDownloadedId$()),
      mergeMap(([action, lastDownloadedProductId]) => {
        return this.productListService.loadNextPage(lastDownloadedProductId, BACKGROUND_LOAD_PRODUCT_LIST_ITEM_COUNT);
      })),
    { dispatch: false }
  );

  public loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_PRODUCT_BY_ID),
      take(1),
      mergeMap(({ productId }) => this.productListService.loadProductById(productId)
        .pipe(
          filter((product: ProductModel) => !!product),
          map((product: ProductModel) => ProductActions.LOAD_PRODUCT_BY_ID_SUCCESS({ product })),
          catchError((error: TypeError) => of(ProductActions.LOAD_PRODUCT_BY_ID_FAILURE({ error }))),
        )
      ),
    ),
  );
}
