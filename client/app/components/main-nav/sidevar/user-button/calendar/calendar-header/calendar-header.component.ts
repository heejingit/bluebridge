import 
  { Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
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
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent implements OnInit {
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
