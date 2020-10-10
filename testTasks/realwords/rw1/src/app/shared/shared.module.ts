import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';
import { ArticleMetaComponent } from './article-helpers/article-meta/article-meta.component';
import { FavoriteButtonComponent } from './buttons/favorite-button/favorite-button.component';
import { FollowButtonComponent } from './buttons/follow-button/follow-button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FollowButtonComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FollowButtonComponent
  ],
})
export class SharedModule { }