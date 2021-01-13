import { Directive } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';

const selector = `[fxFlexAlign.desktop], [fxFlexAlign.mobile], [fxFlexAlign.tablet]`;
const inputs = [
  'fxFlexAlign.desktop',
  'fxFlexAlign.mobile',
  'fxFlexAlign.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomFlexAlignDirective extends FlexAlignDirective {
  protected inputs: Array<string> = inputs;
}
