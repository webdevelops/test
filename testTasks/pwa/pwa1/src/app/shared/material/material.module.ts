import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    // FlexLayoutModule, // ?
    // MatProgressSpinnerModule, // ?
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }