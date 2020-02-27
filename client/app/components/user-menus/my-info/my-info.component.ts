import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  department: string;
  job: string;
  condition: string;
}


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})

export class MyInfoComponent implements OnInit {

  displayedColumns: string[] = [ 'department', 'job', 'condition'];

  constructor() { }

  ngOnInit(): void {
  }

  ELEMENT_DATA= [
    {  department:"HR" , job: 'Manager', condition:"Normal"},
    {  department:"Development Dep. #1" , job: 'Backend Developer', condition:"Busy"},
    {  department:"Development Dep. #2" , job: 'Frontend Developer', condition:"Away"},
    {  department:"jkl" , job: 'Be', condition:"condition"},
    {  department:"mno" , job: 'B', condition:"condition"},
    {  department:"pqr" , job: 'C', condition:"condition"},
    {  department:"stu" , job: 'N', condition:"condition"}
  ]
  condition_options = [ "Busy", "Away", "Normal" ]
  selected = this.ELEMENT_DATA[0].condition;
}