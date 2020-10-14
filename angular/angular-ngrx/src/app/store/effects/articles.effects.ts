import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as ArticlesActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() => this.actions$.pipe(
    ofType(ArticlesActions.LoadArticles),
    mergeMap(() => this.articlesService.getAll()
      .pipe(
        map(articles => (ArticlesActions.LoadArticlesSuccess({ articles }))),
        catchError(error => of(ArticlesActions.LoadArticlesFail({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) { }
};
