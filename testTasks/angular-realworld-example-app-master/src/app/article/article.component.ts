import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';
import { switchMap } from 'rxjs/operators';
import { ArticleMetaComponent } from '../shared';

@Component({
  selector: 'app-article-page',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  name: string;
  article: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  // --------- example 2

  @ViewChild('counter')
  private counterComponent: any;

  increment() {
    this.counterComponent.increment();
    console.log(this.counterComponent.counter);
    // this.counterComponent.counter += 5;
  }

  decrement() {
    this.counterComponent.decrement();
    console.log(this.counterComponent.counter);
  }

  // --------- end example 2

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retreive the prefetched article

    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;

        // Load the comments on this article
        this.populateComments();
      }
    );

    // --------- example 1

    // this.route.params
    //   .pipe(
    //     switchMap(params => {
    //       return this.articlesService.get(params['slug']);
    //     })
    // ).subscribe(article => {
    //     console.log('article', article);   // HTML загружается до ответа с сервера (асинхронный запрос)
    //     this.article = article;            // не видит article
    //     this.populateComments();
    //   });

    // --------- end example 1

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
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

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          // console.log('success', success);
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug)
      .subscribe(comments => this.comments = comments);

    // console.log('this.comments', this.comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.article.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        }
      );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.article.slug)
      .subscribe(
        success => {
          // console.log('comment', comment);
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }

}
