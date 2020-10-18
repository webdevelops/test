import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListConfig, Profile } from 'src/app/core';

@Component({
  selector: 'app-profile-fivorites',
  templateUrl: './profile-fivorites.component.html',
  styleUrls: ['./profile-fivorites.component.scss']
})
export class ProfileFivoritesComponent implements OnInit {
  profile: Profile;
  favoritesConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: { profile: Profile }) => {
        this.profile = data.profile;
        this.favoritesConfig.filters.favorited = this.profile.username
      }
    )
  }

}
