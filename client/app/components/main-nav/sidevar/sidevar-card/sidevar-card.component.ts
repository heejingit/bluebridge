import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidevar-card',
  templateUrl: './sidevar-card.component.html',
  styleUrls: ['./sidevar-card.component.css']
})
export class SidevarCardComponent implements OnInit {
  activeUserName: string;
  activeUserPicture: string;

  constructor() {}

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    this.activeUserName = userData.firstName + ' ' + userData.lastName;
    this.activeUserPicture = userData.picture;
  }
}
