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
  people: string[] = [];
  departments = [
    {value: 1, viewValue: 'Web Development'},
    {value: 2, viewValue: 'Project Management'},
    {value: 3, viewValue: 'Data Analyst'}
  ];
  selectedPeople: string[] = [];
  personName: string = '';
  departmentName: string = '';
  isPersonAdded: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onInvite(event: any): any {
    if (this.personName === '' && this.departmentName !== '') {
      this.people.push(this.departmentName);
      this.isPersonAdded = true;
      return this.departmentName = '';
    }

    if (this.personName !== '' && this.departmentName === '') {
      this.people.push(this.personName);
      this.isPersonAdded = true;
      return this.personName = '';
    }

    if (this.personName !== '' && this.departmentName !== '') {
      return alert('Please empty either the person name or department')
    }

    return alert('Please enter a person name or selet a department.')
  }


  onDiscard(selectedItem) {
    selectedItem = this.selectedPeople;
    selectedItem.forEach(element => {
      this.people.splice(this.selectedPeople.findIndex(item => item === element), 1);

      if (this.people.length === 0) {
        return this.isPersonAdded = false;
      }
    })
  }

}
