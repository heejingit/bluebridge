import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../../shared/user.model';
import { UserService } from '../../../../../../../shared/user.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

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
  users: any;
  userList: any;
  myControl = new FormControl();
  filteredOptions: Observable<User>;
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


  constructor(private UserSerivce: UserService) { }

  ngOnInit(): void {
    this.users = this.UserSerivce.getUsers();

    console.log(this.users);

    this.userList = this.users.map(user => user.personalInfo.firstName + " " + user.personalInfo.lastName);

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(name => name ? this._filter(name) : this.userList.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.firstName + " " + user.lastName ? user.firstName + " " + user.lastName : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.userList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
