// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

// App
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
      // mergeMap(action => this.productService.loadProductList(action.itemCountToLoad))
    )
  );
}