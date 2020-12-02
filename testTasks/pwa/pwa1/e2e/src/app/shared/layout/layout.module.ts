// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { SharedModule } from '../shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { GreetingSectionComponent } from 'src/app/modules/greeting-section/greeting-section.component';
import { ProductListModule } from '../../modules/product-list/product-list.module';
import { ModalWindowComponent } from './partials/modal-window/modal-window.component';
import { ProductListComponent } from 'src/app/modules/product-list/product-list.component';
import { CartWindowComponent } from './partials/header/cart-window/cart-window.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CartDialogComponent } from './partials/header/cart-dialog/cart-dialog.component';
// import { ProductComponent } from 'src/app/modules/product-list/product/product.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    GreetingSectionComponent,
    ModalWindowComponent,
    CartWindowComponent,
    FooterComponent,
    CartDialogComponent,
    // ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListModule
  ],
  exports: [
    LayoutComponent,        // ?
    HeaderComponent,
    GreetingSectionComponent,
    ProductListComponent,        // ?
    CartDialogComponent,
    // ProductComponent
  ]
})
export class LayoutModule { }