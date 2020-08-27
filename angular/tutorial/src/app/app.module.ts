import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module';
import { ModelComponent } from './model/model.component'
import { RefDirective } from './model/ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservablesComponent } from './fundamentals/observables/observables.component';
import { UsageComponent } from './fundamentals/usage/usage.component';
import { InputComponent } from './fundamentals/input/input.component';
import { OperatorsComponent } from './fundamentals/operators/operators.component';
import { SvgComponent } from './fundamentals/svg/svg.component';
import { EventsComponent } from './fundamentals/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModelComponent,
    RefDirective,
    DynamicComponent,
    RxjsComponent,
    ObservablesComponent,
    UsageComponent,
    InputComponent,
    OperatorsComponent,
    SvgComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  // entryComponents: [ModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
