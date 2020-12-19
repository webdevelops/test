// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

// App
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { ProductListComponent } from '../../modules/product-list/product-list.component';
import { SharedModule } from '../shared.module';
import { GreetingSectionComponent } from '../../modules/greeting-section/greeting-section.component';
import { ProductListModule } from 'src/app/modules/product-list/product.module';
import { CartWindowComponent } from './partials/header/cart-window/cart-window.component';
import { ModalWindowComponent } from './partials/modal-window/modal-window.component';
import { CartDialogComponent } from './partials/header/cart-dialog/cart-dialog.component';
import { HomePageComponent } from '../../modules/home-page/home-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    GreetingSectionComponent,
    CartWindowComponent,
    ModalWindowComponent,
    CartDialogComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductListModule,
    MatBadgeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    GreetingSectionComponent,
    // temp-5
  ]
})
export class LayoutModule { }
