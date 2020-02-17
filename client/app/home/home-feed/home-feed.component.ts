import { Component, OnInit } from '@angular/core';

import { Feed } from 'client/app/shared/model/feed.model';
import { HomeService } from './../home.services';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {

  feeds: Feed[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.feeds = this.homeService.getFeeds();
    this.homeService.feedsChanged
      .subscribe(
        (feeds: Feed[]) => {
          this.feeds = feeds;
        }
      );
  }
}
