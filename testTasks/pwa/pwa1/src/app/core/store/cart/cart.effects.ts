// Angular
import { Injectable } from '@angular/core';

// Libs
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// App
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import * as CartActions from './cart.actions';


@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions,
    private productListService: ProductService,
    private cartService: CartService
  ) { }

  public loadCartList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.LOAD_CART),
      mergeMap(() => this.cartService.loadCart()
        .pipe(
          switchMap((productList: Array<ProductModel>) => {
              return [
                CartActions.LOAD_CART_SUCCESS({ productList })
              ];
            }
          ),
          catchError((error: TypeError) => of(CartActions.LOAD_CART_FAILURE({ error }))),
        )
      )
    ),
  );

}
