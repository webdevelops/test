// libs
import { createAction, props } from '@ngrx/store';

// app
import { LAYOUT_TYPE } from '@app-core/types';

// ------------- APP

// app - set layout
export const SET_LAYOUT_TYPE = createAction(
  '[ Core App ] Set Layout',
  props<{ value: LAYOUT_TYPE }>(),
);

// app - clear state
export const APP_CLEAR_STATE = createAction('[ Core App ] Clear State');
