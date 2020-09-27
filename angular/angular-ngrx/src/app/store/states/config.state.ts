import { Config } from 'src/app/core/models';

export interface ConfigState {
  config: Config;
}

export const initialConfigState: ConfigState = {
  config: null
};