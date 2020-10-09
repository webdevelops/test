import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';
import { ArticleMetaComponent } from './article-helpers/article-meta/article-meta.component';
import { FavoriteButtonComponent } from './buttons/favorite-button/favorite-button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    // FavoriteButtonComponent
  ],
})
export class SharedModule { }