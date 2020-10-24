// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../core/services/product.service';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductListModule { }