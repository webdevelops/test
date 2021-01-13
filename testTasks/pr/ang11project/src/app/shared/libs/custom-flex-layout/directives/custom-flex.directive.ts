import { Directive } from '@angular/core';
import { FlexDirective } from '@angular/flex-layout';

const selector = `[fxFlex.desktop], [fxFlex.mobile], [fxFlex.tablet]`;
const inputs = ['fxFlex.desktop', 'fxFlex.mobile', 'fxFlex.tablet'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomFlexDirective extends FlexDirective {
  protected inputs: Array<string> = inputs;
}
