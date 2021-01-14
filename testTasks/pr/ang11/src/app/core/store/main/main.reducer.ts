// libs
import { Action, createReducer, on } from '@ngrx/store';

// app
import * as coreActions from './main.actions';
import { ICoreMainState, initialCoreMainState } from './main.state';

const createCoreMainReducer = createReducer(
  initialCoreMainState,

  on(
    coreActions.SET_LAYOUT_TYPE,
    (state, { value }): ICoreMainState => {
      return {
        ...state,
        layoutType: value,
      };
    },
  ),
);

export function reducer(
  state: ICoreMainState | undefined,
  action: Action,
): ICoreMainState {
  return createCoreMainReducer(state, action);
}
