import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { GreetingSectionComponent } from 'src/app/modules/greeting-section/greeting-section.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    GreetingSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    GreetingSectionComponent
  ]
})
export class LayoutModule { }