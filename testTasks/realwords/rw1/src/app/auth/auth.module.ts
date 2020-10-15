import { NgModule } from "@angular/core";
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }