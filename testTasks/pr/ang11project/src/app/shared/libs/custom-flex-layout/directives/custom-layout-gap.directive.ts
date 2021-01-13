import { Directive } from '@angular/core';
import { LayoutGapDirective } from '@angular/flex-layout';

const selector = `[fxLayoutGap.desktop], [fxLayoutGap.mobile], [fxLayoutGap.tablet]`;
const inputs = [
  'fxLayoutGap.desktop',
  'fxLayoutGap.mobile',
  'fxLayoutGap.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomLayoutGapDirective extends LayoutGapDirective {
  protected inputs: Array<string> = inputs;
}
