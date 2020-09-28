import { createSelector } from '@ngrx/store';

import { AppState } from "../states/app.state";
import { ConfigState } from '../states/config.state';

const configState = (state: AppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: ConfigState) => state.config
);