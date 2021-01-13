import { BREAKPOINT, BreakPoint } from '@angular/flex-layout';

import { CUSTOM_BREAKPOINTS, ICustomBreakPoint } from './custom-breakpoints';

export function generateBreakPoints(
  customBreakPoints: Array<ICustomBreakPoint>,
): Array<BreakPoint> {
  return customBreakPoints.map((cbp: ICustomBreakPoint) => {
    return {
      alias: cbp.alias,
      mediaQuery: `screen${
        cbp.minWidth ? ` and (min-width: ${cbp.minWidth}px)` : ''
      }${cbp.maxWidth ? ` and (max-width: ${cbp.maxWidth}px)` : ''}`,
    };
  });
}

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: generateBreakPoints(CUSTOM_BREAKPOINTS),
  multi: true,
};
