import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class SigninComponent implements OnInit {
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
