import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreFeatureModule } from './store.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { ChildComponent, LifecycleComponent } from './lifecycle.component';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffect } from './store/effects/shop.effects';
import { ShopModule } from './shop/shop.module';
import { ShopComponent } from './shop/shop.component';
import { PhonesComponent } from './phones/phones.component';
import { PhonesModule } from './phones/phones.module';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildComponent,
    CounterComponent,
    UserComponent,
    PhonesComponent,
    // ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreFeatureModule,
    // PhonesModule
    // EffectsModule.forRoot([ShopEffect]),
    // ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
