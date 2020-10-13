import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/core';

export const LOAD_ARTICLE = '[Articles] Load Articles';                 // обязательно создавать констаны???
export const LOAD_ARTICLE_FAIL = '[Articles] Load Articles Fail';
export const LOAD_ARTICLE_SUCCESS = '[Articles] Load Articles Success';

export const LoadArticles = createAction(LOAD_ARTICLE);
export const LoadArticlesFail = createAction(LOAD_ARTICLE_FAIL, props<any>());
export const LoadArticlesSuccess = createAction(LOAD_ARTICLE_SUCCESS, props<{articles: Article[]}>());
