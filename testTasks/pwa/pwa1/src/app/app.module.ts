// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ?
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// Libs
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../app/shared/layout/layout.module';
import { SharedModule } from '../app/shared/shared.module';
import { ProductEffects } from './core/store/product/product.effects';
import { BasketEffects } from './core/store/basket/basket.effects';
import { reducers, metaReducers } from './core/store';
import { environment } from 'src/environments/environment';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';
import { ProductListModule } from './modules/product-list/product-list.module';

// --- test-component -----
import { TestComponent } from './shared/layout/partials/test/test.component';
// ---- test-component ... //

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,

    // test-component ----
    TestComponent
    // --- test-component


  ],
  imports: [
    FormsModule,
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
    StoreModule.forRoot(reducers, { metaReducers }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    // InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
