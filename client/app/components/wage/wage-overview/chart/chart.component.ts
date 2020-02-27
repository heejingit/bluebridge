import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WageService } from '../wage.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  dateArray = this.wageService.getDateArray(1, 31);
  workingHoursArray = this.wageService.getWorkingHoursArray();

  constructor(private wageService: WageService) { }

  ngOnInit(): void {
  }

  // chart options
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          stepSize : 1,
          min: 0,
          max: 15,
        },
      }]
    }
  };

  barChartLabels: Label[] = this.dateArray;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    {
      backgroundColor: '#3F51B5'
    },
  ];

  barChartData: ChartDataSets[] = [
    { data: this.workingHoursArray, label: 'Working hours', lineTension: 0 }
  ];
}
