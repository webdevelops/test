import { initialConfigState, ConfigState } from '../states/config.state';
import { ConfigActions, EConfigActions } from '../actions/config.actions';

export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
): ConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      }

    default:
      return state;
  }
};