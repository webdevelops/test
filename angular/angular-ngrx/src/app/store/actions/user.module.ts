import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import { userFeatureKey, userReducer } from '../reducers/user.reduser';

@NgModule({
  imports: [
    StoreModule.forFeature(userFeatureKey, userReducer)
  ]
})
export class UserModule { }