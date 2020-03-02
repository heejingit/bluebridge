import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap } from "rxjs/operators";
import { HomeFeed } from "../components/home/home-feed/home-feed.model";
import { HomeService } from "../components/home/home.service";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(private http: HttpClient, private homeService: HomeService) {}

  storeFeeds() {
    const feeds = this.homeService.getFeeds();
    this.http.put("http://localhost:3000/api/feeds", feeds).subscribe();
  }

  fetchFeeds() {
    return this.http.get<HomeFeed[]>("http://localhost:3000/api/feeds").pipe(
      tap(feeds => {
        this.homeService.setFeeds(feeds);
      })
    );
  }
}
