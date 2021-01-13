import { Directive } from '@angular/core';
import { LayoutAlignDirective } from '@angular/flex-layout';

const selector = `[fxLayoutAlign.desktop], [fxLayoutAlign.mobile], [fxLayoutAlign.tablet]`;
const inputs = [
  'fxLayoutAlign.desktop',
  'fxLayoutAlign.mobile',
  'fxLayoutAlign.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomLayoutAlignDirective extends LayoutAlignDirective {
  protected inputs: Array<string> = inputs;
}
