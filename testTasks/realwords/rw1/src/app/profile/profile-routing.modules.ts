import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileFivoritesComponent } from './profile-fivorites/profile-fivorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },

    children: [
      {
        path: '',
        component: ProfileArticlesComponent
      },
      {
        path: 'favorites',
        component: ProfileFivoritesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }