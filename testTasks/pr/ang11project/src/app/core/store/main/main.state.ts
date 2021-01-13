// app
import { LAYOUT_TYPE } from '@app-core/types';

export interface ICoreMainState {
  layoutType: LAYOUT_TYPE;
}

export const initialCoreMainState: ICoreMainState = {
  layoutType: LAYOUT_TYPE.UNDEFINED,
};
