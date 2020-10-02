import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addUser } from '../store/actions/user.actions';
import { User } from '../core/models';
import * as userSelectors from '../store/selectors/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userCount$: Observable<number>;
  userCount: number;
  name: string;
  users;
  user: User = {
    id: null,
    name: ''
  };

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.userCount$ = this.store.select<number>(userSelectors.selectUserTotal);
    
    // this.store.select<number>(userSelectors.selectUserTotal).subscribe(
    //   totalCount => {
    //     // console.log('totalCount', totalCount);
    //     this.userCount = totalCount
    //   }
    // );
  }

  addUser() {
    if (this.name === '' || this.name === undefined) {
      alert('Enter name, please!')
      return;
    };

    const randomId = `${this.name}-${Math.random()}`;
    this.user = {
      ...this.user,
      id: randomId,
      name: this.name
    };

    this.store.dispatch(addUser({ user: this.user }));
    this.name = '';
  }
}