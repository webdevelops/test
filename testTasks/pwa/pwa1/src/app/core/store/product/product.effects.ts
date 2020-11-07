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
  // public oldPreviousPage: number = 0;

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

  public loadNexrPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_NEXT_PAGE),
      // withLatestFrom(this.productSelectors.selectPage$(), this.productSelectors.selectLastDownloadedId$()),
      withLatestFrom(
        this.productSelectors.selectPage$(),
        this.productSelectors.selectProductIds$(),
        this.productSelectors.selectLastDownloadedId$()
      ),
      mergeMap(([action, page, productIds, lastDownloadedProductId]) => {

        const nextPage = action.currentPage > action.previousPage ? ++page : --page;

        // console.log("ProductEffects -> action.previousPage", action.previousPage)
        // console.log("ProductEffects -> action.currentPage", action.currentPage)
        // console.log("ProductEffects -> nextPage", nextPage)

        return this.productService.loadNextPage(lastDownloadedProductId, action.itemCountToLoad)
          .pipe(
            switchMap((productList: Array<ProductModel>) => {
              // console.log("ProductEffects -> productList", productList)
              const lastInResponse = +productList[productList.length - 1].productId;
              return [
                ProductActions.HIDE_LOADER(),
                ProductActions.LOAD_NEXT_PAGE_SUCCESS({ productList, page: nextPage, lastDownloadedProductId: lastInResponse })
              ];
            })
          )
      })
    )
  )
}