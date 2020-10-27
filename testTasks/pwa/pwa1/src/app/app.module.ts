// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ?
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Libs


// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../app/shared/layout/layout.module';
import { SharedModule } from '../app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // ?  Просит в консоли - Found the synthetic listener @translateTab.start
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    FlexLayoutModule,
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    // EffectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
