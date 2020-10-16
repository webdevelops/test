import { Component, OnInit } from '@angular/core';

import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

  currentUser;
  // currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }

      // this.userService.currentUser.subscribe(
      // userData => { this.currentUser = userData; }
      // console.log("HeaderComponent -> ngOnInit -> userData", userData)
    )
  }

}
