import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Profile } from 'src/app/core/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private profileService: ProfileService
  ) { }

  @Input() profile: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  ngOnInit() {
  }

  toggleFollowing() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.pipe(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        if (!this.profile.following) {
          return this.profileService.follow(this.profile.username)
            .pipe(tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(true);
              },
              err => this.isSubmitting = false
            ));

        } else {
          return this.profileService.unfollow(this.profile.username)
            .pipe(tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(false);
              },
              err => this.isSubmitting = false
            ));
        }
      }
    ).subscribe();
  }

}
