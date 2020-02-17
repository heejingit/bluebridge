import { Feed } from '../shared/model/feed.model';
import { EventEmitter } from '@angular/core';

export class HomeService {
  feedsChanged = new EventEmitter<Feed[]>();

  private feeds: Feed[] = [
    new Feed(
      "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
      "February 6, 2020",
      "[Admin] John Doe",
      true
    ),
    new Feed(
      "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
      "January 26, 2020",
      "Woojin Oh",
      false
    ),
    new Feed(
      "I have so many trash",
      "January 20, 2020",
      "Injun Hwang",
      false
    ),
  ];

  getFeeds() {
    return this.feeds.slice();
  }

  addFeed(feed: Feed) {
    this.feeds.push(feed);
    this.feedsChanged.emit(this.feeds.slice());
  }
}