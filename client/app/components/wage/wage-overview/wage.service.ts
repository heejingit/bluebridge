import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class WageService {
  public workingHours = [
    {
      start: new Date('Tue Feb 3 2020 06:04:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 3 2020 15:24:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 5 2020 08:04:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 5 2020 15:06:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 8 2020 08:04:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 8 2020 18:04:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 9 2020 07:04:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 9 2020 12:34:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 10 2020 07:04:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 10 2020 12:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 13 2020 05:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 13 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 14 2020 08:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 14 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 15 2020 08:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 15 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 16 2020 08:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 16 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 17 2020 07:54:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 17 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 18 2020 12:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 18 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
    {
      start: new Date('Tue Feb 19 2020 13:24:58 GMT-0400 (Atlantic Standard Time)'),
      end: new Date('Tue Feb 19 2020 18:23:58 GMT-0400 (Atlantic Standard Time)')
    },
  ]

  public workingHoursArray = [];
  public totalHoursFloat =  0;

  constructor() {
    this.getDateArray(1, 31).map( x => {
      var date = this.workingHours.find( y => moment(y.start).format('D') == x.toString());

      this.workingHoursArray.push(
        date !== undefined ? moment.duration(moment(date.end).diff(moment(date.start))).asHours().toFixed(2) : 0
      )
    });
  };

  // [1, 2, ... , 30, 31]
  getDateArray = (start, end) => {
    var arr = [];
    var num = start; 

    while (num <= end) {
      arr.push(num);
      num += 1;
    }
    return arr;
  }


  // return workingHours object
  getWorkingHours() {
    return this.workingHours.slice();
  }

  getWorkingHoursArray() {
    return this.workingHoursArray.slice();
  }

  getTotalHoursFloat() {
    this.totalHoursFloat = this.workingHoursArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    return this.totalHoursFloat;
  }
}