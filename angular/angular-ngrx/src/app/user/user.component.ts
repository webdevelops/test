import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addUser, deleteUser } from '../store/actions/user.actions';
import { User } from '../core/models';
import * as userSelectors from '../store/selectors/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userCount$: Observable<number>;
  name = '';
  users: User[] = [];

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.userCount$ = this.store.select<number>(userSelectors.selectUserTotal);
    
    this.store.select<User[]>(userSelectors.selectAllUsers).subscribe(
      users => {
        this.users = users;
        console.log('Users on Store', users);
      }
    );
  }

  addUser() {
    if (this.name.trim() === '') {
      alert('Enter name, please!')
      return;
    }

    const randomId = `${this.name}-${Math.random()}`;
    const user: User = {
      id: randomId,
      name: this.name
    };

    this.store.dispatch(addUser({ user }));  // --- выносить в сервис ???
    this.name = '';
  }

  deleteUser(id) {
    this.store.dispatch(deleteUser({id: id}));
  }
}