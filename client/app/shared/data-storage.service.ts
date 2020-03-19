import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';

import { HomeService } from '../components/home/home.service';
import { UserService } from './user.service';

import { HomeFeed } from '../components/home/home-feed/home-feed.model';
import { User } from '../shared/user.model';

import { Schedule } from './schedule.model';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private homeService: HomeService,
    private userService: UserService,
    private scheduleService: ScheduleService
  ) {}

  fetchUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/users').pipe(
      tap(users => {
        this.userService.setUsers(users);
      })
    );
  }

  storeFeed(feed) {
    // const feeds = this.homeService.getFeeds();
    // console.log(feeds);
    // this.http.put('http://localhost:3000/api/feeds', feeds).subscribe();
    const newFeed = feed;
    this.http.post('http://localhost:3000/api/feeds', newFeed).subscribe(() => {
      this.fetchFeeds().subscribe();
    });
  }

  deleteFeed(id) {
    this.http.delete(`http://localhost:3000/api/feeds/${id}`).subscribe(() => {
      this.fetchFeeds().subscribe();
    });
  }
  // storeFeeds() {
  //   const feeds = this.homeService.getFeeds();
  //   console.log(feeds);
  //   this.http.put('http://localhost:3000/api/feeds', feeds).subscribe(() => {
  //     this.fetchFeeds().subscribe();
  //   });
  // }

  fetchFeeds() {
    return this.http.get<HomeFeed[]>('http://localhost:3000/api/feeds').pipe(
      // map(feeds => {
      //   const users = this.userService.getUsers(); // fetch users here!!!
      //   console.log(users);
      //   return feeds.map(feed => {
      //     const user = users.filter(user => user._id === feed.author);

      //     if (!user.length) return feed;
      //     const userName =
      //       user[0].personalInfo.firstName +
      //       ' ' +
      //       user[0].personalInfo.lastName;

      //     return {
      //       ...feed,
      //       authorName: userName ? userName : 'Temp User',
      //       avatar: user[0].personalInfo.picture,
      //       isLogin: user[0].isLogin
      //     };
      //   });
      // }),
      tap(feeds => {
        this.homeService.setFeeds(feeds);
      })
    );
  }

  fetchSchedule() {
    return this.http.get<Schedule[]>('http://localhost:3000/api/schedules').pipe(
      tap(schedules => {
        this.scheduleService.setSchedules(schedules);
      })
    );
  }

}
