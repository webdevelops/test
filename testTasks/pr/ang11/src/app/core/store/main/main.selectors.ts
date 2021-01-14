// libs
import { createSelector } from '@ngrx/store';

// app
import { NGRX_STATE_NAMES } from '@app/app.config';
import { IAppState } from '@app/store/app.state';
import { LAYOUT_TYPE } from '@app-core/types';
import { ICoreMainState } from './main.state';

export const selectCoreMainState = (state: IAppState): ICoreMainState =>
  state[NGRX_STATE_NAMES.CORE_MAIN];

export const selectLayoutType = createSelector(
  selectCoreMainState,
  (state: ICoreMainState) => state.layoutType,
);
export const selectIsMobile = createSelector(
  selectCoreMainState,
  selectLayoutType,
  (state, layout: LAYOUT_TYPE) => layout === LAYOUT_TYPE.MOBILE,
);
export const selectIsTablet = createSelector(
  selectCoreMainState,
  selectLayoutType,
  (state, layout: LAYOUT_TYPE) => layout === LAYOUT_TYPE.TABLET,
);
export const selectIsDesktop = createSelector(
  selectCoreMainState,
  selectLayoutType,
  (state, layout: LAYOUT_TYPE) => layout === LAYOUT_TYPE.DESKTOP,
);
