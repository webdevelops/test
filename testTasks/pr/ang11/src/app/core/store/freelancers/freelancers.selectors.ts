// ang
import { Injectable } from "@angular/core";

// libs
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

// app
import * as rootIntfs from '@app/interfaces';
import { IAppState } from '@app/store/app.state';
import { IFreelancerState } from './freelancers.state';
import { NGRX_STATE_NAMES } from '@app/app.config';

export const selectFreelancerState = createFeatureSelector<IFreelancerState>(NGRX_STATE_NAMES.CORE_FREELANCERS);

export const selectFreelancerList = createSelector(
  selectFreelancerState,
  (state: IFreelancerState) => state,
);

@Injectable({
  providedIn: 'root'
})
export class FreelancerSelectorService {
  constructor(private store: Store<IAppState>) { }

  selectFreelancerList(): Observable<{ pages: number, profiles: rootIntfs.IFreelancerProfile[] }> {
    return this.store.select(selectFreelancerList)
  }
}