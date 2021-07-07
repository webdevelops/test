// ang
import { Injectable } from "@angular/core";

// libs
import { Store, createAction, props } from '@ngrx/store';

// app
import { IAppState } from '@app/store/app.state';
import { IFreelancerResponse } from '@app/interfaces';

export const LOAD_FREELANCER_LIST = createAction('[Load User] FREELANCER_LOAD');
export const LOAD_FREELANCER_LIST_SUCCESS = createAction(
  '[Load User] FREELANCER_LOAD_SUCCESS',
  props<{ freelancerList: IFreelancerResponse }>()
);

@Injectable({
  providedIn: 'root'
})
export class FreelancerActionsService {
  constructor(private store: Store<IAppState>) { }

  loadFreelancerList(): void {
    this.store.dispatch(LOAD_FREELANCER_LIST());
  }

  loadFreelancerListSuccess(freelancerList: IFreelancerResponse) {
    this.store.dispatch(LOAD_FREELANCER_LIST_SUCCESS({ freelancerList }));
  }
}