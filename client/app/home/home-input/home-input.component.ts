import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Feed } from '../../shared/model/feed.model';
import { HomeService } from './../home.services';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.css']
})
export class HomeInputComponent implements OnInit {
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  onAddFeed(form: NgForm) {
    const feedDesc = form.value.descInput;
    const feedDate = "February 14, 2020";
    const feedUser = "Woojin Oh";
    const feedHighPriority = form.value.priorityInput;
    const newFeed = new Feed(feedDesc, feedDate, feedUser, feedHighPriority);
    this.homeService.addFeed(newFeed);

    console.log(form);
    // reset all form input
    form.reset();
  }
}