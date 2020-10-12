import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';

import { Article } from '../core/models/article.model';
import { Comment } from '../core/models/comment.model';
import { User } from '../core/models/user.model';
import { ArticlesService } from '../core/services/articles.service';
import { CommentsService } from '../core/services/comments.service';
// import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService,
    private articlesService: ArticlesService,
    private router: Router,
    // private userService: UserService
  ) { }

  // isAuthenticated$: Observable<boolean>;
  article: Article;
  canModify: boolean;
  isDeleting = false;
  comments: Comment[];
  // appShowAuthed: true;
  commentFormErrors = {};
  isSubmitting = false;
  commentControl = new FormControl();
  currentUser: User;

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;

        this.populateComments();
      }
    )

    // this.isAuthenticated$ = this.userService.isAuthenticated;
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug)
      .subscribe(comments => this.comments = comments)
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      )
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  addComment() {

  }

  onDeleteComment() {

  }
}
