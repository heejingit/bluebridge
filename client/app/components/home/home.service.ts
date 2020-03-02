import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { HomeFeed } from "./home-feed/home-feed.model";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  /** 
  // http request test
  BASE_URL = "http://localhost:3000/api";
  private feedStore: Feed[] = [];
  private feedSubject = new Subject<Feed[]>();

  feeds = this.feedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getFeeds();
  }

  getFeeds() {
    this.http.get<Feed[]>(this.BASE_URL + "/feeds").subscribe(
      response => {
        console.log(response);
        this.feedStore = response;
        this.feedSubject.next(this.feedStore);
      },
      error => {
        this.handleError("Unable to get feeds");
      }
    );
  }

  private handleError(error) {
    console.error(error);
  }
  /////////////////////////
  */

  // feedsChanged = new EventEmitter<Feed[]>();

  // private feeds: Feed[] = [
  //   new Feed(
  //     "Due to the prior appointment set up, we had to change the schedule originally set up on Friday. It will happened next Monday. Thanks for your understanding.",
  //     "February 6, 2020",
  //     "[Admin] John Doe",
  //     true
  //   ),
  //   new Feed(
  //     "Management announced that they gave us a new garbage can! Don't throw your garbage on the floor anymore please!",
  //     "January 26, 2020",
  //     "Woojin Oh",
  //     false
  //   ),
  //   new Feed("I have so many trash", "January 20, 2020", "Injun Hwang", false)
  // ];

  feedsChanged = new Subject<HomeFeed[]>();
  private feeds: HomeFeed[] = [];

  setFeeds(feeds: HomeFeed[]) {
    this.feeds = feeds;
    this.feedsChanged.next(this.feeds.slice());
  }

  getFeeds() {
    return this.feeds.slice();
  }

  addFeed(feed: HomeFeed) {
    this.feeds.push(feed);
    this.feedsChanged.next(this.feeds.slice());
  }

  // addFeed(feed: Feed) {
  //   this.feeds.push(feed);
  //   this.feedsChanged.emit(this.feeds.slice());
  // }
}
