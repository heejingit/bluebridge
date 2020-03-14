import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { HomeFeed } from "../home-feed/home-feed.model";
import { HomeService } from "./../home.service";
import { DataStorageService } from "./../../../shared/data-storage.service";

@Component({
  selector: "app-home-input",
  templateUrl: "./home-input.component.html",
  styleUrls: ["./home-input.component.css"]
})
export class HomeInputComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {}

  onAddFeed(form: NgForm) {
    const id = "5e6515c2fc13ae3c1600049a";
    const author = "Woojin Oh";
    const description = form.value.descInput;
    const date = new Date();
    const isHighPriority = form.value.priorityInput;
    // const newFeed = new HomeFeed(author, description, date, isHighPriority); // 나중에 server쓸때 이걸로 바꾸자.
    const newFeed = {
      _id: id,
      author: author,
      description: description,
      date: date,
      isHighPriority: isHighPriority
    };
    this.homeService.addFeed(newFeed);
    // reset all form input
    form.reset();
    this.dataStorageService.storeFeeds();
  }
}
