import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { DataStorageService } from "../../../shared/data-storage.service";
import { HomeService } from "./../home.service";
import { HomeFeed } from "./home-feed.model";

@Component({
  selector: "app-home-feed",
  templateUrl: "./home-feed.component.html",
  styleUrls: ["./home-feed.component.css"]
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
        this.feeds = feeds;
      }
    );
    this.dataStorageService.fetchFeeds().subscribe();
    this.feeds = this.homeService.getFeeds();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
