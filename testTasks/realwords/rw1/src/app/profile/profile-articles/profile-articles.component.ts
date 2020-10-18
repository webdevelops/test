import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleListConfig, Profile } from 'src/app/core';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styleUrls: ['./profile-articles.component.scss']
})
export class ProfileArticlesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  profile: Profile;
  articleConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: { profile: Profile }) => {
        this.profile = data.profile;
        this.articleConfig = {
          type: 'all',
          filters: {}
        };
        this.articleConfig.filters.author = this.profile.username;
      }
    )
  }

}
