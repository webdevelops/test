import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { GreetingSectionComponent } from 'src/app/modules/greeting-section/greeting-section.component';
import { ProductListModule } from '../../modules/product-list/product-list.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    GreetingSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListModule
  ],
  exports: [
    HeaderComponent,
    GreetingSectionComponent,
  ]
})
export class LayoutModule { }