import { Directive } from '@angular/core';
import { FlexOffsetDirective } from '@angular/flex-layout';

const selector = `[fxFlexOffset.desktop], [fxFlexOffset.mobile], [fxFlexOffset.tablet]`;
const inputs = [
  'fxFlexOffset.desktop',
  'fxFlexOffset.mobile',
  'fxFlexOffset.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomFlexOffsetDirective extends FlexOffsetDirective {
  protected inputs: Array<string> = inputs;
}
