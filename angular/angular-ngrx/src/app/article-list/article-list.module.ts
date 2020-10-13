import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';

import { ArticlesEffects } from '../store/effects/articles.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EffectsModule.forFeature([ArticlesEffects])
  ]
})
export class ArticleListModule {}