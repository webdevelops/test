import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule // ?
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }