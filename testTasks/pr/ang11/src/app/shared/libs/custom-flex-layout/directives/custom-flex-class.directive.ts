import { Directive } from '@angular/core';
import { DefaultClassDirective } from '@angular/flex-layout';

const selector = `[ngClass.desktop], [ngClass.mobile], [ngClass.tablet]`;
const inputs = ['ngClass.desktop', 'ngClass.mobile', 'ngClass.tablet'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomFlexClassDirective extends DefaultClassDirective {
  protected inputs: Array<string> = inputs;
}
