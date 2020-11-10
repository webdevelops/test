// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, take, withLatestFrom } from 'rxjs/operators';

// App
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import * as ProductActions from './product.actions';
import { ProductSelectors } from './product.selectors';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productSelectors: ProductSelectors,
  ) { }

  public showLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.PRODUCT_LIST_LOAD),
      map(() => ProductActions.SHOW_LOADER()),
    )
  );

  public loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.PRODUCT_LIST_LOAD),
      mergeMap(action => this.productService.loadProductList(action.itemCountToLoad)
        .pipe(
          switchMap((productList: Array<ProductModel>) => {
            const lastInResponse: number = +productList[productList.length - 1].productId;
            return [
              ProductActions.HIDE_LOADER(),
              ProductActions.PRODUCT_LIST_LOAD_SUCCESS({ productList, lastDownloadedProductId: lastInResponse })
            ];
          }),
          catchError((error: TypeError) => of(ProductActions.PRODUCT_LIST_LOAD_FAILURE({ error }))),
        )
      )
    )
  );

  public loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_PRODUCT_BY_ID),
      take(1),
      mergeMap(({ productId }) => this.productService.loadProductById(productId)
        .pipe(
          filter((product: ProductModel) => !!product),
          map((product: ProductModel) => ProductActions.LOAD_PRODUCT_BY_ID_SUCCESS({ product })),
          catchError((error: TypeError) => of(ProductActions.LOAD_PRODUCT_BY_ID_FAILURE({ error })))
        )
      )
    )
  );

  public loadAnotherPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_ANOTHER_PAGE),
      mergeMap(action => {
        return this.productService.loadAnotherPage(action.lastDownloadedProduct, action.itemCountToLoad)
          .pipe(
            switchMap((productList: Array<ProductModel>) => {
              return [
                ProductActions.HIDE_LOADER(),
                ProductActions.LOAD_ANOTHER_PAGE_SUCCESS({ productList })
              ];
            })
          )
      })
    )
  )
}