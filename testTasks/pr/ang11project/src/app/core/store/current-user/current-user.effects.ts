/* eslint-disable @typescript-eslint/no-explicit-any */
// angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// libs
import { Actions } from '@ngrx/effects';

@Injectable()
export class CoreCurrentUserEffects {
  constructor(private actions$: Actions, private router: Router) {}
}
