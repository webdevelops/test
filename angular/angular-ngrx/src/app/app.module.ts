import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreFeatureModule } from './store.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { ChildComponent, LifecycleComponent } from './lifecycle.component';
import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
// import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildComponent,
    CounterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreFeatureModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
    // EffectsModule.forRoot([ShopEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
