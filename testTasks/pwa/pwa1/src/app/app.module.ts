// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ?
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// Libs
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../app/shared/layout/layout.module';
import { SharedModule } from '../app/shared/shared.module';
import { ProductEffects } from './core/store/product/product.effects';
import { BasketEffects } from './core/store/basket/basket.effects';
import { reducers } from './core/store';
import { environment } from 'src/environments/environment';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';
import { ProductListModule } from './modules/product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    // BrowserAnimationsModule, // ?  Просит в консоли - Found the synthetic listener @translateTab.start
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    ProductListModule, // ?
    FlexLayoutModule,
    // FlexLayoutModule.withConfig({ ssrObserveBreakpoints: ['xs', 'lt-md', 'lt-lg'] }),
    EffectsModule.forRoot([
      ProductEffects,
      BasketEffects
    ]),
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
