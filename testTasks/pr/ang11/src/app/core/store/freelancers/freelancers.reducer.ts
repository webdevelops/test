// libs
import { createReducer, on, Action } from "@ngrx/store";

// app
import * as freelancerActions from './freelancers.actions';
import { initialFreelancerState, IFreelancerState } from './freelancers.state';

const createFreelancerReducer = createReducer(
  initialFreelancerState,
  on(
    freelancerActions.LOAD_FREELANCER_SUCCESS,
    (state, { freelancerList }): IFreelancerState => ({
      ...state,
      ...freelancerList
    })
  )
)

export function reducer(
  state: IFreelancerState | undefined,
  action: Action
): IFreelancerState {
  return createFreelancerReducer(state, action);
}