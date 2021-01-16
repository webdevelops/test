// ang
import { RouterReducerState } from '@ngrx/router-store';

import * as fromCurrentUser from '@app/core/store/current-user';
import * as fromCoreMain from '@app/core/store/main';
import * as fromFreelancers from '@app/core/store/freelancers';

// TODO property names from enum NGRX_STATE_NAMES
export interface IAppState {
  router?: RouterReducerState;

  // core
  CORE_MAIN: fromCoreMain.ICoreMainState;
  CORE_CURRENT_USER: fromCurrentUser.ICurrentUserState;
  CORE_FREELANCERS: fromFreelancers.IFreelancerState;
}

export const appState: IAppState = {
  CORE_MAIN: fromCoreMain.initialCoreMainState,
  CORE_CURRENT_USER: fromCurrentUser.initialCurrentUserState,
  CORE_FREELANCERS: fromFreelancers.initialFreelancerState,
};
