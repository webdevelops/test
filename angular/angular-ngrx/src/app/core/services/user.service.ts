import { Injectable } from "@angular/core";

import { ApiService } from './api.service';


@Injectable()
export class UserService {
  constructor(
    private apiService: ApiService
  ) { }

  getUsers() {
    return this.apiService.get('/api/users');
  }

  addUser(user) {
    return this.apiService.post('/api/users', user)
  }
}