import { HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArticleListConfig } from '../models/article-list-config.model';
import { Article } from '../models/article.model';
import { ApiService } from './api.service';

@Injectable()
export class ArticlesService {
  constructor(
    private apiService: ApiService
  ) { }

  query(config: ArticleListConfig): Observable<{ articles: Article[], articlesCount: number }> {
    const params = {};

    Object.keys(config.filters)  // variant 1
      .forEach(key => {
        params[key] = config.filters[key];
      });

    // Object.assign(params, config.filters);  // --- the same as variant 1 ???
    return this.apiService
      .get(
        '/articles' + ((config.type === 'feed') ? '/feed' : ''),
        new HttpParams({ fromObject: params })
      );
  }

  get(slug): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
      .pipe(map(data => data.article));
  }

  favorite(slug): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }
}