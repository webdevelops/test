import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomBreakPointsProvider } from './custom-breakpoints-provider';
import {
  CustomFlexAlignDirective,
  CustomFlexClassDirective,
  CustomFlexDirective,
  CustomFlexOffsetDirective,
  CustomFlexOrderDirective,
  CustomLayoutAlignDirective,
  CustomLayoutDirective,
  CustomLayoutGapDirective,
  CustomShowHideDirective,
} from './directives';

const COMMON = [
  CustomFlexAlignDirective,
  CustomFlexOffsetDirective,
  CustomFlexOrderDirective,
  CustomFlexDirective,
  CustomFlexClassDirective,
  CustomLayoutAlignDirective,
  CustomLayoutGapDirective,
  CustomLayoutDirective,
  CustomShowHideDirective,
];

@NgModule({
  exports: [...COMMON, FlexLayoutModule],
  declarations: COMMON,
  imports: [FlexLayoutModule],
  providers: [CustomBreakPointsProvider],
})
export class CustomFlexLayoutModule {}
