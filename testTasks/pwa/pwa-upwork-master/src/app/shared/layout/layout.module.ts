// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//App
import { HeaderComponent } from '../layout/partials/header/header.component';
import { FooterComponent } from '../layout/partials/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { ProductListComponent } from '../../modules/product-list/product-list.component'
import { SharedModule } from '../shared.module';
import { GreetingSectionComponent } from '../../modules/greeting-section/greeting-section.component';
import { ProductListModule } from 'src/app/modules/product-list/product.module';
import { CartWindowComponent } from './partials/header/cart-window/cart-window.component';
import { ModalWindowComponent } from './partials/modal-window/modal-window.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    GreetingSectionComponent,
    CartWindowComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    GreetingSectionComponent
  ]
})
export class LayoutModule { }
