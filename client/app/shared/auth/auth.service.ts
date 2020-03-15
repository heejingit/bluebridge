import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Auth } from './auth.model';

export interface AuthResponseData {
  userID: string;
  email: string;
  userName: string;
  token: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<Auth>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup() {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/api/users/login', {
        email: email,
        password: password
      })
      .pipe(
        tap(resData => {
          this.handleAuthentication(
            resData.userID,
            resData.email,
            resData.userName,
            resData.token,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      id: string;
      email: string;
      userName: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new Auth(
      userData.id,
      userData.email,
      userData.userName,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser); // auto login
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime(); // duration for auto logout after auto login
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/signin']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    userID: string,
    email: string,
    userName: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new Auth(userID, email, userName, token, expirationDate);
    this.user.next(user);
    // this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
