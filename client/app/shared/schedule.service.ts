import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedulesChanged = new Subject<Schedule[]>();
  private schedules: Schedule[] = [];

  setSchedules(schedules: Schedule[]) {
    this.schedules = schedules;
    this.schedulesChanged.next(this.schedules.slice());
  }

  getSchedules() {
    return this.schedules.slice();
  }

//   addSchedule(schedule: Schedule) {
//     this.schedules.push(schedule);
//     this.schedulesChanged.next(this.schedules.slice());
//   }

}
