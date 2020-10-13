import { NgModule } from "@angular/core";

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { ArticlesService } from './services';

@NgModule({
  exports: [],
  providers: [
    ApiService,
    UserService,
    ArticlesService
  ]
})
export class CoreModule { }