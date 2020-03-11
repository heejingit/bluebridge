import { Component, OnInit } from '@angular/core';

interface departments {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  people: any[] = [];
  departments = [
    {value: 0, viewValue: ''},
    {value: 1, viewValue: 'Web Development'},
    {value: 2, viewValue: 'Project Management'},
    {value: 3, viewValue: 'Data Analyst'}
  ];
  selectedPeople: any;
  personName: string = '';
  departmentName: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  onInvite(event: any) {
    if (this.personName === '' && this.departmentName === '') {
      return alert('Please enter a person name or selet a department.')    
    }

    if (this.personName === '' && this.departmentName !== '' && this.participantValidation()) {
      this.people.push(this.departmentName);
      this.departmentName = '';
    }

    if (this.personName !== '' && this.departmentName === '' && this.participantValidation()) {
      this.people.push(this.personName);
      this.personName = '';
    }

    if (this.personName !== '' && this.departmentName !== '') {
      alert('Please empty either the person name or department')
    }

  }


  onDiscard(index: number) {
    return this.people.splice(index, 1);
  }

  participantValidation() {
    if (this.people.some(element => element === this.personName || element === this.departmentName)) {
      return alert('The inserted participant already exists.')
    }
    return true;
  }

}
