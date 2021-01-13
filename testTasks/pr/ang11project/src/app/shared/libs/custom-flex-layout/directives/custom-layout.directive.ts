import { Directive } from '@angular/core';
import { LayoutDirective } from '@angular/flex-layout';

const selector = `[fxLayout.desktop], [fxLayout.mobile], [fxLayout.tablet]`;
const inputs = ['fxLayout.desktop', 'fxLayout.mobile', 'fxLayout.tablet'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomLayoutDirective extends LayoutDirective {
  protected inputs: Array<string> = inputs;
}
