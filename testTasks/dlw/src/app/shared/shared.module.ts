import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';

@NgModule({
  declarations: [
    SvgIconsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SvgIconsComponent
  ]
})
export class SharedModule { }