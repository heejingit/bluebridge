import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLoggedIn: boolean = false;

  constructor() { }

  loginStatusChange() {
    this.isLoggedIn = false;
    this.change.emit(this.isLoggedIn);  
  }

  ngOnInit(): void {
  }

}
