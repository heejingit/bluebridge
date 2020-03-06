import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  years = ["2018", "2019", "2020"];

  constructor() { }

  ngOnInit(): void {
  }

}
