import { NgModule } from "@angular/core";

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    // LayoutComponent,  // ?
    // HeaderComponent   // ?
  ]
})
export class LayoutModule { }