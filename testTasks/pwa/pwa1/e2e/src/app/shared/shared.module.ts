// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// App
import { SvgIconsComponent } from '../shared/svg-icons/svg-icons.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoadingComponent } from '../shared/layout/partials/loading/loading.component';

@NgModule({
  declarations: [
    SvgIconsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // ?
    MaterialModule, // ?
    ReactiveFormsModule, // ?
  ],
  exports: [
    SvgIconsComponent,
    RouterModule,
    MaterialModule,
    LoadingComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }