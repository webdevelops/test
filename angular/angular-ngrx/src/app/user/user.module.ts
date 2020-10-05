import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import { userFeatureKey, userReducer } from '../store/reducers/user.reduser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature(userFeatureKey, userReducer)
  ],
  declarations: []
})
export class UserModule { }