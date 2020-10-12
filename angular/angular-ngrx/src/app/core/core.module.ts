import { NgModule } from "@angular/core";

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

@NgModule({
  exports: [],
  providers: [
    ApiService,
    UserService
  ]
})
export class CoreModule { }