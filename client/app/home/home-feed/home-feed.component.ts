import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {

  feeds = [
    {
      title: "[Notice] The meeting schedule on Friday has been changed",
      description: "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
      date: "February 6, 2020",
      user: "[Admin] John Doe",
      highPriority: true
    },
    {
      title: "New garbage can in the corner of the office",
      description: "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
      date: "January 26, 2020",
      user: "Woojin Oh",
      highPriority: false
    },
    {
      title: "I need garbage can",
      description: "I have so many trash",
      date: "January 20, 2020",
      user: "Injun Hwang",
      highPriority: false
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
