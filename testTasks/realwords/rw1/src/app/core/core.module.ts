import { NgModule } from "@angular/core";

import { UserService } from './services/user.service';
import { JwtService } from './services/jwt.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
  ],
  providers: [
    UserService,
    JwtService,
    ApiService
  ]
})
export class CoreModule {}