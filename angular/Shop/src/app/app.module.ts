import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AuthInterceptor } from './shared/auth.interseptor';
import { ProductComponent } from './product/product.component';

const INTERCEPTER_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [INTERCEPTER_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
