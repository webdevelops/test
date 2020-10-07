import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig } from '../core/models/article-list-config.model';
import { TagsService } from '../core/services/tags.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {},
  };
  tagsLoaded = false;
  tags: Array<string> = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private tagsService: TagsService
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;

      if (authenticated) {
        this.setListTo('feed');
      } else {
        this.setListTo('all');
      }
    });

    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags;
      this.tagsLoaded = true;
    });
  }

  setListTo(type: string, filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.listConfig = {
      type,
      filters,
    };
  }
}
