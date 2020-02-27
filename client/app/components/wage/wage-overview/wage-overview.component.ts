import { Component, OnInit } from '@angular/core';
import { WageService } from './wage.service';

@Component({
  selector: 'app-wage-overview',
  templateUrl: './wage-overview.component.html',
  styleUrls: ['./wage-overview.component.css']
})
export class WageOverviewComponent implements OnInit {

  constructor(private wageService: WageService) { }

  ngOnInit(): void {
  }

}
