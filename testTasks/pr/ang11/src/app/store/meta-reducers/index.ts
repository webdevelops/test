import { MetaReducer } from '@ngrx/store';

import { IAppState } from '../app.state';
import { localStorageSyncReducer } from './local-storage-sync.reducer';

export const metaReducers: Array<MetaReducer<IAppState>> = [
  localStorageSyncReducer,
];
