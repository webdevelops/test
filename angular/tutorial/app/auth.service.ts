import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth = false;

  login() {
    this.isAuth = true;
    // console.log(this.isAuth);
  }

  logout() {
    this.isAuth = false;
    // console.log(this.isAuth);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    })
  }
}