// libs
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

// app
import { IAppState } from './app.state';
import * as fromCurrentUser from '@app-core/store/current-user';
import * as fromMain from '@app-core/store/main/main.reducer';
import * as fromFreelancer from '@app-core/store/freelancers';

export const appReducer: ActionReducerMap<IAppState> = {
  router: routerReducer,

  CORE_MAIN: fromMain.reducer,
  CORE_CURRENT_USER: fromCurrentUser.reducer,
  CORE_FREELANCERS: fromFreelancer.reducer
};
