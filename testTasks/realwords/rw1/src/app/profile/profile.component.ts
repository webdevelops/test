import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, tap } from 'rxjs/operators';

import { Profile, User, UserService } from '../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  isUser: boolean;
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      concatMap((data: { profile: Profile }) => {
        this.profile = data.profile;

        return this.userService.currentUser.pipe(
          tap(userData => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          })
        )
      })
    ).subscribe()
  }

  onToggleFollowing() {

  }
}
