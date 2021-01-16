// ang
import { Injectable } from "@angular/core";

// libs
import { Store, createAction, props } from '@ngrx/store';

// app
import { IAppState } from '@app/store/app.state';
import { IFreelancerResponse } from '@app/interfaces';

export const LOAD_FREELANCER = createAction('[Load User] FREELANCER_LOAD');
export const LOAD_FREELANCER_SUCCESS = createAction(
  '[Load User] FREELANCER_LOAD_SUCCESS',
  props<{ freelancerList: IFreelancerResponse }>()
);

@Injectable({
  providedIn: 'root'
})
export class FreelancerActionsService {
  constructor(private store: Store<IAppState>) { }

  loadUserListSuccess(freelancerList: IFreelancerResponse) {
    this.store.dispatch(LOAD_FREELANCER_SUCCESS({ freelancerList }));
  }
}