import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/core';

export const LOAD_ARTICLES = '[Articles] Load Articles';                 // обязательно создавать констаны???
export const LOAD_ARTICLES_FAIL = '[Articles] Load Articles Fail';
export const LOAD_ARTICLES_SUCCESS = '[Articles] Load Articles Success';

export const LoadArticles = createAction(LOAD_ARTICLES);
export const LoadArticlesFail = createAction(LOAD_ARTICLES_FAIL, props<any>());
export const LoadArticlesSuccess = createAction(LOAD_ARTICLES_SUCCESS, props<{ articles: Article[] }>());
