import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/couter.actions';

export const initialState = 0;

console.log('counter -----------');

const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const countFeatureKey = 'count';

export function counterReducer(state, action) {
  return reducer(state, action);
}