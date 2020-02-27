import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  Name: string;
  Department: string;
  Job: string;
  Wage: number;
  Overview: string;
}

  const  ELEMENT_DATA: PeriodicElement[]= [
    {Name:'Heejin Jeon',    Department: 'Web Development', Job : 'Junior Web Dev',  Wage: 20, Overview:''},
    {Name:'Woojin Oh',      Department: 'Web Development', Job : 'Junior Web Dev',  Wage: 20, Overview:''},
    {Name:'Injun Hwang',  Department: 'Web Development', Job : 'Junior Web Dev',  Wage: 20, Overview:''},
    {Name:'John Doe',       Department: 'Web Development', Job : 'Junior Web Dev',  Wage: 20, Overview:''},
    {Name:'Sarah Doe',     Department: 'Project Management', Job : 'Junior Project Management',  Wage: 20, Overview:''},
    {Name:'Tom Doe',       Department: 'UI/UX Design', Job : 'Junior UI Designer',  Wage: 20, Overview:''}
  ];

@Component({
  selector: 'app-wage-list-of-staff',
  templateUrl: './wage-list-of-staff.component.html',
  styleUrls: ['./wage-list-of-staff.component.css']
})

export class WageListOfStaffComponent {
//implements OnInit {

  displayedColumns: string[] = [ 'Name', 'Department', 'Job', 'Wage', 'Overview'];
  dataSource = ELEMENT_DATA;
  //constructor() { }

  //ngOnInit(): void {
  //}

}
