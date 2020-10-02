import { NgModule } from "@angular/core";

import { CounterModule } from './counter/counter.module';

@NgModule({
  exports: [
    CounterModule
  ]
})
export class StoreFeatureModule { }