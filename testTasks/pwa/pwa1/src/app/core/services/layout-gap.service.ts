import { Injectable } from '@angular/core';
import {
  LayoutGapParent,
  LayoutGapStyleBuilder,
  StyleDefinition
} from '@angular/flex-layout';

@Injectable()
export class CustomLayoutGapStyleBuilder extends LayoutGapStyleBuilder {
  buildStyles(gapValue: string, parent: LayoutGapParent): StyleDefinition {
    return super.buildStyles(gapValue || '0 px', parent);
  }

  sideEffect(gapValue, _styles, parent) {
    return super.sideEffect(gapValue || '0 px', _styles, parent);
  }
}

// source: https://stackoverflow.com/questions/60175336/uncaught-typeerror-cannot-read-property-endswith-of-undefined-at-layoutgapsty
