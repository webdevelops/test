// libs
import { StoreModule } from '@ngrx/store';

// env
import { appReducer } from './app.reducer';
// app
import { metaReducers } from './meta-reducers';

export const appStore = StoreModule.forRoot(appReducer, {
  metaReducers,
  // runtimeChecks: {
  //   strictStateImmutability: false,
  //   strictActionImmutability: false,
  // },
});
