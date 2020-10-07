import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  currentUser: User;

  ngOnInit() {
    // this.userService.currentUser.subscribe(
    //   (userData) => this.currentUser = userData;
    // )
  }

}
