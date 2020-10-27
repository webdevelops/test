import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule { }
