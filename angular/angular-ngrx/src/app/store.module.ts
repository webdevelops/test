import { NgModule } from "@angular/core";

import { CounterModule } from './counter/counter.module';
import { UserModule } from './user/user.module';

@NgModule({
  exports: [
    CounterModule,
    UserModule
  ]
})
export class StoreFeatureModule { }