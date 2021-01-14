// ang
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStartService, startupServiceFactory } from './app-start.service';
import { CoreModule } from './core/core.module';
import { HttpRequestInterceptor } from './core/interceptors/http-request-interceptor';
import { CustomFlexLayoutModule } from './shared/libs/custom-flex-layout/custom-flex-layout.module';
import { coreEffectsModule as appEffectsModule } from './store/app.effects';
import { appStore } from './store/app.store';
import { storeDevToolsModule } from './store/dev-tools.module';
import { storeRouterConnectingModule } from './store/router-connect.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,

    // store (ngrx)
    appStore,
    appEffectsModule,
    storeRouterConnectingModule,
    storeDevToolsModule,

    // material
    BrowserAnimationsModule,

    // flex-layout
    CustomFlexLayoutModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      multi: true,
      deps: [AppStartService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
