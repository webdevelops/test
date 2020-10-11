import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';
import { ArticleMetaComponent } from './article-helpers/article-meta/article-meta.component';
import { FavoriteButtonComponent } from './buttons/favorite-button/favorite-button.component';
import { FollowButtonComponent } from './buttons/follow-button/follow-button.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { ListErrorsComponent } from './list-error/list-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ShowAuthedDirective,
    ListErrorsComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ShowAuthedDirective,
    ListErrorsComponent,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }