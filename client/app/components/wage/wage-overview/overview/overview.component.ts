import { Component, OnInit } from '@angular/core';
import { WageService } from './../wage.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  workingHours = this.wageService.getWorkingHours();
  workingHoursArray = this.wageService.getWorkingHoursArray();
  totalHoursFloat = this.wageService.getTotalHoursFloat();
  totalHours = ~~this.totalHoursFloat;
  totalMinutes = (this.totalHoursFloat - this.totalHours) * 60;
  totalDays = this.workingHours.length;

  constructor(private wageService: WageService) { }

  ngOnInit(): void {
  }
 
}
