import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared.module';
import { ModulesModule } from 'src/app/modules/modules.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ModulesModule
  ],
  exports: [
    // LayoutComponent,  // ?
    // HeaderComponent   // ?
  ]
})
export class LayoutModule { }