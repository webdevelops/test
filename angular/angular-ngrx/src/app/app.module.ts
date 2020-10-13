import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreFeatureModule } from './store.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { ChildComponent, LifecycleComponent } from './lifecycle.component';
import { environment } from 'src/environments/environment.prod';
import { CoreModule } from './core/core.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListModule } from './article-list/article-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildComponent,
    CounterComponent,
    UserComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ArticleListModule,
    EffectsModule.forRoot([]),   // !!! работает только если добавить в imports: ArticleListModule
    StoreModule.forRoot({}),
    StoreFeatureModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
