import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Schedule } from '../../../../../../shared/schedule.model';
import { ScheduleService } from '../../../../../../shared/schedule.service';
import { UserService } from '../../../../../../shared/user.service';
import { DataStorageService } from '../../../../../../shared/data-storage.service';
import { ScheduleDetailDialog } from './dialog/dialog.component';

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

export interface DialogData {
  dialog_eventData: any;
  dialog_matchedUser: Array<string>; 
}

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
  allUsers: any = this.UserService.getUsers();

  dialog_eventData: any;

  dialog_matchedUser: Array<string>;

  eventData: any;

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

    {
      title: 'Tour event with university students',
      color: colors.yellow,
      start: new Date("2020-03-09T00:00:00.000Z")
    }
  ];

  constructor(
    private dataStorageService: DataStorageService,
    private ScheduleService: ScheduleService,
    private UserService: UserService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.dataStorageService.fetchSchedule().subscribe();

    const schedules = this.ScheduleService.getSchedules();

    schedules.map(schedule => {
     let setColor;
     let editedSchedule;

     if (schedule.type === "meeting") setColor = colors.red;
     if (schedule.type === "vacation") setColor = colors.blue;
     if (schedule.type === "event") setColor = colors.yellow;

     editedSchedule = {
       title: schedule.title,
       description: schedule.description,
       color: setColor,
       start: new Date(schedule.startDate),
       end: new Date(schedule.endDate),
       user: schedule.user,
       type: schedule.type
     }

     return this.events.push(editedSchedule);

    })


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

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    this.eventData = event;
    this.dialog_eventData = event;
    console.log(this.dialog_eventData);
    
    if(this.eventData.user) {
      const matchedUser = this.eventData.user.map(userid => {
        return this.allUsers.filter(user => user._id === userid)
      })

      console.log(matchedUser);

      this.dialog_matchedUser = matchedUser.map(user => {
        return user[0].personalInfo.firstName + " " + user[0].personalInfo.lastName
      })

      console.log(this.dialog_matchedUser);
    }

    const dialogRef = this.dialog.open(ScheduleDetailDialog, {
      width: '500px',
      data: {eventData: this.dialog_eventData, users: this.dialog_matchedUser}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }


  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}