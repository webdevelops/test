import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { ShopService } from 'src/app/shop/shop.service';

@Injectable()
export class ShopEffect {
  loadPhones$ = createEffect(() => this.actions$.pipe(
    ofType('[Phones] Load Phones'),
    mergeMap(() => this.shopService.getAll()
      .pipe(
        map(phones => {
          console.log('phones', phones)
          return { type: '[Phones] Phones Loaded Success', payload: phones }
        }),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private shopService: ShopService
  ) { }
}