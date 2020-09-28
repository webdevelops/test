import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};