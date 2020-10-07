import { NgModule } from "@angular/core";

import { UserService } from './services/user.service';
import { JwtService } from './services/jwt.service';
import { ApiService } from './services/api.service';
import { TagsService } from './services/tags.service';

@NgModule({
  imports: [
  ],
  providers: [
    UserService,
    JwtService,
    ApiService,
    TagsService
  ]
})
export class CoreModule { }