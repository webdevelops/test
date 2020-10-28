// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

// App
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
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
    ));
}