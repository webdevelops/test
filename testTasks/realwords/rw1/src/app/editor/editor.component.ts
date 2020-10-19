import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticlesService } from '../core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  article: Article = {} as Article;
  errors: Object = {};
  articleForm: FormGroup;
  tagField = new FormControl();
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) {
    this.articleForm = this.fb.group({
      title: '',
      description: '',
      body: ''
    });

    this.article.tagList = [];
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        if (data.article) {
          this.article = data.article;
          this.articleForm.patchValue(this.article);
        }
      }
    );
  }

  addTag() {
    const tag = this.tagField.value;

    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }

    this.tagField.reset();
  }

  removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    this.updateArticle(this.articleForm.value);

    this.articlesService.save(this.article).subscribe(
      article => this.router.navigateByUrl('/article/' + article.slug),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    )
  }

  updateArticle(value: Object) {
    Object.assign(this.article, value);
  }
}
