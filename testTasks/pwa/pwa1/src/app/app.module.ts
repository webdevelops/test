// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ?
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// Libs
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../app/shared/layout/layout.module';
import { SharedModule } from '../app/shared/shared.module';
import { ProductEffects } from './core/store/product/product.effects';
import { reducers } from './core/store';
import { environment } from 'src/environments/environment';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // ?  Просит в консоли - Found the synthetic listener @translateTab.start
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    FlexLayoutModule,
    // AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
