import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    private apiService: ApiService
  ) {}

  private currentUserSubject = new Subject();
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }
}