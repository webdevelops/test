import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ArticleResolver } from './article/article-resolver.service';
import { ArticleComponent } from './article/article.component';
// import { AuthComponent } from './auth/auth.component';
import { ProfileArticlesComponent } from './profile/profile-articles/profile-articles.component';
import { ProfileFivoritesComponent } from './profile/profile-fivorites/profile-fivorites.component';
import { ProfileResolver } from './profile/profile-resolver.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile/:username',
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
  },
  {
    path: 'editor',
    component: EditorComponent
  }


  // {
  //   path: 'article',
  //   loadChildren: './article/article.module#ArticleModule'
  // },
  // {
  //   path: 'settings',
  //   loadChildren: './settings/settings.module#SettingsModule'
  // },
  // {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfileModule'
  // },
  // {
  //   path: 'editor',
  //   loadChildren: './editor/editor.module#EditorModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
