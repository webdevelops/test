import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ArticleListComponent,
    ArticlePreviewComponent
  ],
})
export class SharedModule { }