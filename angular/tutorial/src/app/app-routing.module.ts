import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'extra', component: AboutExtraComponent }
    ]
  },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }