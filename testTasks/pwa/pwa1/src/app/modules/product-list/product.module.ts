// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// App
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../core/services/product.service';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { LayoutGapStyleBuilder } from '@angular/flex-layout';
import { CustomLayoutGapStyleBuilder } from '../../core/services/layout-gap.service';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [ProductListComponent, ProductComponent],
  providers: [
    ProductService,
    { provide: LayoutGapStyleBuilder, useClass: CustomLayoutGapStyleBuilder }
  ]
})
export class ProductListModule { }
