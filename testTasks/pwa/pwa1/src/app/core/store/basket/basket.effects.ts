// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// App
import * as BasketActions from '../basket/basket.actions';
import { BasketService } from '../../services/basket.service';
// import { ProductModel } from '../../models/product.model';

@Injectable()
export class BasketEffects {
  constructor(
    private actions$: Actions,
    private basketService: BasketService
  ) { }

  public addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.ADD_TO_CART),
      mergeMap(action => this.basketService.addToCart(action.product)
        .pipe(
          map(product => {
            return BasketActions.ADD_TO_CART_SUCCESS({ product: action.product })
          }),
          // catchError((error: TypeError) => of(BasketActions.ADD_TO_CART_FAILURE({ error })))
        )
      )
    )
  );

  public removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.REMOVE_FROM_CART),
      mergeMap(action => this.basketService.removeFromCart(action.productId)
        .pipe(
          map(productId => {
            return BasketActions.REMOVE_FROM_CART_SUCCESS({ productId: action.productId })
          }),
          // catchError((error: TypeError) => of(BasketActions.REMOVE_FROM_CART_FAILURE({ error })))
        )
      )
    )
  );
}