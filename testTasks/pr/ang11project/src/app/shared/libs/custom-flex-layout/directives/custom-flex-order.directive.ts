import { Directive } from '@angular/core';
import { FlexOrderDirective } from '@angular/flex-layout';

const selector = `[fxFlexOrder.desktop], [fxFlexOrder.mobile], [fxFlexOrder.tablet]`;
const inputs = [
  'fxFlexOrder.desktop',
  'fxFlexOrder.mobile',
  'fxFlexOrder.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomFlexOrderDirective extends FlexOrderDirective {
  protected inputs: Array<string> = inputs;
}
