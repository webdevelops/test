import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import * as counter from '../store/reducers/counter.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(counter.countFeatureKey, counter.counterReducer)
  ]
})
export class CounterModule {}