import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { Article } from 'src/app/core/models/article.model';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  @Input() article: Article;
  @Output() toggle = new EventEmitter<boolean>();

  isSubmitting = false;



  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        if (authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        if (this.article.favorited) {
          this.articlesService
        }
      }
    ))
  }
}
