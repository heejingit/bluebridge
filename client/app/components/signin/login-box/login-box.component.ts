import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import {
  AuthService,
  AuthResponseData
} from 'client/app/shared/auth/auth.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
  // providers: [AuthService]
})
export class LoginBoxComponent implements OnInit {
  isAuthnticated = false;
  private userSub: Subscription;

  form: FormGroup; // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder, // {3}
    private authService: AuthService, // {4}
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthnticated = !user ? false : true;
      this.isAuthnticated = !!user; // same as the above
      console.log(this.isAuthnticated);
      if (this.isAuthnticated) {
        this.router.navigate(['portal/home']);
      }
    });

    this.form = this.fb.group({
      // {5}
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const email = this.form.value.email;
    const password = this.form.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(email, password);

    authObs.subscribe(resData => {
      this.router.navigate(['/portal/home']);
    });

    this.formSubmitAttempt = true; // {8}
  }
}
