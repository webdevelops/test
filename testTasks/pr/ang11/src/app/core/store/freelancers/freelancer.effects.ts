// ang
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

// libs
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

// app
import * as FreelancersActions from './freelancers.actions'
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';
import { IFreelancerResponse } from '@app/interfaces';
// import { freelancerList } from '@app/core/mock/freelancer-list';

@Injectable()
export class CoreFreelancersEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private freelancerHttpService: FreelancerHttpService
  ) { }

  // public loadFreelancers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(FreelancersActions.LOAD_FREELANCER_LIST),
  //     mergeMap(async () => FreelancersActions.LOAD_FREELANCER_LIST_SUCCESS({ freelancerList }))
  //   )
  // )

  public loadFreelancers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FreelancersActions.LOAD_FREELANCER_LIST),
      mergeMap(() => this.freelancerHttpService.searchFreelancerList()
        .pipe(
          map((freelancerList: IFreelancerResponse) => FreelancersActions.LOAD_FREELANCER_LIST_SUCCESS({ freelancerList })))
      )
    )
  )
}
