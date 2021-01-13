// libs
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

// app
import * as fromCurrentUser from '@app-core/store/current-user';
import * as fromMain from '@app-core/store/main/main.reducer';
import { IAppState } from './app.state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appReducer: ActionReducerMap<IAppState> = {
  router: routerReducer,

  CORE_MAIN: fromMain.reducer,
  CORE_CURRENT_USER: fromCurrentUser.reducer,
};
