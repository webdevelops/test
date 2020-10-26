import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ?

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../app/shared/layout/layout.module';
import { SharedModule } from '../app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // ?  Просит в консоли - Found the synthetic listener @translateTab.start
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    // FlexLayoutModule.withConfig({ ssrObserveBreakpoints: ['xs', 'lt-md', 'lt-lg'] })
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
