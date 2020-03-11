import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface wagelistofstaff {
  position: number;
  name:            string;
  department:   string;
  job:               string;
  wage:            number;
  overview:       string;
}
const  WageListData: wagelistofstaff[]= [
    {position:1, name:'Heejin Jeon',    department: 'Web Development', job : 'Junior Web Dev',  wage: 23, overview:''},
    {position:2, name:'Woojin Oh',      department: 'Web Development', job : 'Junior Web Dev',  wage: 22, overview:''},
    {position:3, name:'Injun Hwang',  department: 'Web Development', job : 'Junior Web Dev',  wage: 18, overview:''},
    {position:4, name:'John Doe',       department: 'Web Development', job : 'Junior Web Dev',  wage: 20, overview:''},
    {position:5, name:'Sarah Doe',     department: 'Project Management', job : 'Junior Project Management',  wage: 27, overview:''},
    {position:6, name:'Tom Doe',       department: 'UI/UX Design', job : 'Junior UI Designer',  wage: 19, overview:''}
  ];

@Component({
  selector: 'app-wage-list-of-staff',
  styleUrls: ['./wage-list-of-staff.component.css'],
  templateUrl: './wage-list-of-staff.component.html',
})

export class WageListOfStaffComponent {

  wagelistColumns: string[] = ['position', 'name', 'department', 'job', 'wage', 'overview'];
  datalist = new MatTableDataSource<wagelistofstaff>(WageListData);
  console = console;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datalist.filter = filterValue.trim().toLowerCase();
  }
}
