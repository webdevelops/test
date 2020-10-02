import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

import { addUser } from '../store/actions/user.actions';
import { User } from '../core/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // name$: Observable<string>;
  name: string;
  user: User;

  constructor(private store: Store) {
    // this.name$ = store.select('name');
  }

  ngOnInit(): void {
  }

  addUser() {
    this.user = { ...this.user, name: this.name }
    // console.log('addUser({ user: this.user })', addUser({ user: this.user }));
    this.store.dispatch(addUser({ user: this.user }));
  }
}
