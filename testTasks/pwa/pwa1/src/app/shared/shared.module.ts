// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

// App
import { LoadingComponent } from '../shared/layout/partials/loading/loading.component';
import { MaterialModule } from './material/material.module';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';

@NgModule({
  declarations: [LoadingComponent, SvgIconsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SvgIconsComponent,
    LoadingComponent,
    NgImageSliderModule
  ]
})
export class SharedModule { }
