// libs
import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

// app
import { NGRX_STATE_NAMES } from '@app/app.config';
import { IAppState } from '@app/store/app.state';

export function localStorageSyncReducer(
  reducer: ActionReducer<IAppState>,
): ActionReducer<IAppState> {
  return localStorageSync({
    keys: [NGRX_STATE_NAMES.CORE_CURRENT_USER],
    rehydrate: true, // to get the initial data for store from the local storage
  })(reducer);
}
