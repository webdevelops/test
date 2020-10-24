// Angular
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';

// Libs
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ProductListModule } from './modules/product-list/product.module';
import { SharedModule } from './shared/shared.module';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';
import { reducers } from './core/store';
import { ProductEffects } from './core/store/product/product.effects';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    ProductListModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ProductEffects]),
    FlexLayoutModule.withConfig({ ssrObserveBreakpoints: ['xs', 'lt-md', 'lt-lg'] }),
    LayoutModule,
  ],
  providers: [AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
