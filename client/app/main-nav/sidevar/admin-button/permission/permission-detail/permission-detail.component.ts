import { Component, OnInit } from '@angular/core';

interface Role {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-permission-detail',
  templateUrl: './permission-detail.component.html',
  styleUrls: ['./permission-detail.component.css']
})
export class PermissionDetailComponent implements OnInit {
  selectedValue: number;
  selectedRoleValue: string;
  selectedRoleName: string;

  roleList: string[] = [];
  roleNameList: string[] = [];

  name = 'Heejin Jeon';

  roles: Role[] = [
    {value: 1, viewValue: 'User Administrator'},
    {value: 2, viewValue: 'Accounting Manager'},
    {value: 3, viewValue: 'Schedule Manager'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddedRole(selectedItem) {
    selectedItem = this.selectedValue;

    if (this.roleList.find(ele => ele === selectedItem)) {
      return alert('This role has been already added.');
    }

    this.roleList.push(selectedItem);

    // for display
    let filteredValue = this.roles.filter(ele => ele.value === selectedItem);
    this.roleNameList.push(filteredValue[0].viewValue);

  }

  onDeleteRole(selectedItem) {
    selectedItem = this.selectedRoleValue;
    selectedItem.forEach(element => {
      const foundIndex = this.roleNameList.findIndex(item => item === element);
      console.log(foundIndex);
    })
  }
}
