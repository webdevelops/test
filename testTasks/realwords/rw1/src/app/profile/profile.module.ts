import { NgModule } from "@angular/core";

import { SharedModule } from '../shared';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileFivoritesComponent } from './profile-fivorites/profile-fivorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileRoutingModule } from './profile-routing.modules';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProfileArticlesComponent,
    ProfileFivoritesComponent
  ],
  providers: [ProfileResolver]
})
export class ProfileModule { }