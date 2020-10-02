import { NgModule } from "@angular/core";

import { CounterModule } from './counter/counter.module';
import { UserModule } from './store/actions/user.module';

@NgModule({
  exports: [
    CounterModule,
    UserModule
  ]
})
export class StoreFeatureModule { }