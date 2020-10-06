import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig } from '../core/models/article-list-config.model';
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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;

      if (authenticated) {
        this.setListTo('feed');
      } else {
        this.setListTo('all');
      }
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
