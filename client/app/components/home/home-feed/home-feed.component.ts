import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/data-storage.service';
import { HomeService } from './../home.service';
import { HomeFeed } from './home-feed.model';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit, OnDestroy {
  feeds: HomeFeed[];
  subscription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.subscription = this.homeService.feedsChanged.subscribe(
      (feeds: HomeFeed[]) => {
        this.feeds = feeds.sort((a, b) => {
          // sort descending by date and high priority
          const date1 = new Date(a.date);
          const date2 = new Date(b.date);
          return (
            Number(b.isHighPriority) - Number(a.isHighPriority) ||
            date2.getTime() - date1.getTime()
          );
        });
      }
    );
    this.dataStorageService.fetchFeeds().subscribe();
    // this.feeds = this.homeService.getFeeds();
    // console.log(this.feeds);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
