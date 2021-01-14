import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxHide.desktop], [fxHide.mobile], [fxHide.tablet], [fxShow.desktop], [fxShow.mobile], [fxShow.tablet]`;
const inputs = [
  'fxHide.desktop',
  'fxHide.mobile',
  'fxHide.tablet',
  'fxShow.desktop',
  'fxShow.mobile',
  'fxShow.tablet',
];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomShowHideDirective extends ShowHideDirective {
  protected inputs: Array<string> = inputs;
}
