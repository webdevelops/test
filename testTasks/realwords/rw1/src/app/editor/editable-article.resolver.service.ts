import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Article, ArticlesService, UserService } from '../core';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EditableArticleResolver implements Resolve<Article> {
  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.articlesService.get(route.params['slug'])
      .pipe(map(
        article => {
          if (this.userService.getCurrentUser().username === article.author.username) {
            return article;
          
          } else {
            this.router.navigateByUrl('/');
          }
        },
        catchError(() => this.router.navigateByUrl('/'))
      ));
  }
}