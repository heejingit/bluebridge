import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Schedule } from '../../../../../../shared/schedule.model';
import { ScheduleService } from '../../../../../../shared/schedule.service';
import { DataStorageService } from '../../../../../../shared/data-storage.service';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.css']
})
export class CalendarMainComponent implements OnInit {
  schedules: Schedule[];

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    // {
    //   title: 'Heejin Jeon on Vacation',
    //   color: colors.blue,
    //   start: new Date("February 13, 2020")
    // },

    // {
    //   title: 'Woojin Oh on Vacation',
    //   color: colors.blue,
    //   start: new Date("February 14, 2020")
    // },

    // {
    //   title: 'Injun Hwang on Vacation',
    //   color: colors.blue,
    //   start: new Date("February 18, 2020")
    // },

    // {
    //   title: 'Web Development meeting at 9:30AM (Click to view all the participants)',
    //   color: colors.red,
    //   start: new Date("February 13, 2020")
    // },

    // {
    //   title: 'Tour event with university students',
    //   color: colors.yellow,
    //   start: new Date("February 13, 2020")
    // }
  ];

  constructor(
    private dataStorageService: DataStorageService,
    private ScheduleService: ScheduleService
    ) { }

  ngOnInit() {
    this.dataStorageService.fetchSchedule().subscribe();

    console.log(this.schedules);

  }

  activeDayIsOpen: boolean;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
