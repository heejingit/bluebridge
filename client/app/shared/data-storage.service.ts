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
        console.log(users);
        this.userService.setUsers(users);
      })
    );
  }

  storeFeeds() {
    const feeds = this.homeService.getFeeds();
    this.http.put('http://localhost:3000/api/feeds', feeds).subscribe();
  }

  fetchFeeds() {
    return this.http.get<HomeFeed[]>('http://localhost:3000/api/feeds').pipe(
      map(feeds => {
        const users = this.userService.getUsers();
        return feeds.map(feed => {
          const user = users.filter(user => user._id === feed.author);

          if (!user.length) return feed;

          const userName = user[0].firstName + ' ' + user[0].lastName;

          return {
            ...feed,
            author: userName ? userName : 'Temp User'
          };
        });
      }),
      tap(feeds => {
        this.homeService.setFeeds(feeds);
      })
    );
  }

  fetchSchedule() {
    return this.http.get<Schedule[]>('http://localhost:3000/api/schedules').pipe(

      tap(schedules => {
        schedules.map(schedule => {
          const StartDate = schedule.startDate.toDateString;
          const EndDate = schedule.endDate.toDateString;

          return {
            ...schedule,
            startDate: StartDate,
            endDate: EndDate
          }
        })
        return this.scheduleService.setSchedules(schedules);
      })
    );
  }

}
