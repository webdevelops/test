// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap } from 'rxjs/operators';

// App
import * as BasketActions from '../basket/basket.actions';
import { BasketService } from '../../services/basket.service';
// import { ProductModel } from '../../models/product.model';
import { of } from 'rxjs';

@Injectable()
export class BasketEffects {
  constructor(
    private actions$: Actions,
    private basketService: BasketService
  ) { }

  // public tempAddToCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(BasketActions.ADD_TO_CART),
  //     map((product) => BasketActions.ADD_TO_CART_SUCCESS({ product }))
  //   )
  // );

  public addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.ADD_TO_CART),
      mergeMap(action => {
        // return this.basketService.addToCart(action.product)
        return of(action.product)
          .pipe(
            switchMap((product) => {
              return BasketActions.ADD_TO_CART_SUCCESS({ product })
            }),
            // catchError((error: TypeError) => of(BasketActions.ADD_TO_CART_FAILURE({ product })))
          )
      }
      )
    )
  );
}