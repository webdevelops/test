import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgIconsComponent } from '../shared/svg-icons/svg-icons.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    SvgIconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // ?
    MaterialModule, // ?
  ],
  exports: [
    SvgIconsComponent,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }