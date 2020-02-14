import { Component } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard]
})
export class AppComponent {
  title = 'BlueBridge';
  isLoggedIn: boolean = true;

  LoginChange(event) {
    this.isLoggedIn = event;
  }


}
