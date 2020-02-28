import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { WageService } from '../../wage.service';

@Component({
  selector: 'app-wage-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  workingHours = this.wageService.getWorkingHours();
  dailyWorkingHours = [];
  
  constructor(private wageService: WageService) { }

  ngOnInit(): void {
    this.getDailyWorkingHours();
  }

  getDailyWorkingHours()  {
    this.workingHours.map(x => {
      let totalMinutes: number = moment(x.end).diff(moment(x.start), 'minutes');
      let hours: number = Math.floor(totalMinutes/60);
      let minutes: number = totalMinutes - hours * 60;
      let item: string = `${hours} hours ${minutes} minutes`;
      this.dailyWorkingHours.push(item);
    }); 
  }
}
