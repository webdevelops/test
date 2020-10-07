import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addUser, deleteUser, upsertUser } from '../store/actions/user.actions';
import { User } from '../core/models';
import * as userSelectors from '../store/selectors/user.selectors';
import { delay, take } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userCount$: Observable<number>;
  name = '';
  updateName = '';
  users: User[] = [];
  userId = '';
  userLoaded = false;
  isVisible = false;

  constructor(private store: Store<{ user: User }>) { }

  ngOnInit(): void {
    this.userCount$ = this.store.select<number>(userSelectors.selectUserTotal).pipe(delay(1000));

    this.store.select<User[]>(userSelectors.selectAllUsers)
      // .pipe(delay(1000))
      .subscribe(
        users => {
          this.userLoaded = true;
          this.isVisible = false;
          this.users = users;
        }
      );
  }

  addUser() {
    if (this.name.trim() === '') {
      alert('Enter name, please!');
      return;
    }

    const randomId = `${this.name}-${Math.random()}`;
    const user: User = {
      id: randomId,
      name: this.name
    };

    this.userLoaded = false;

    setTimeout(() => this.store.dispatch(addUser({ user })), 1000);

    // this.store.dispatch(addUser({ user }));
    this.name = '';
  }

  showEditField(id) {
    this.isVisible = true;
    this.userId = id;
  }

  updateUser() {
    const user: User = {
      id: this.userId,
      name: this.updateName
    }

    this.store.dispatch(upsertUser({ user }));
    this.updateName = '';
  }

  deleteUser(id) {
    this.store.dispatch(deleteUser({ id: id }));
  }
}