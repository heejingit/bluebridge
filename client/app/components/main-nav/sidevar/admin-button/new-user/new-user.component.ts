import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  department: string;
  job_title: string;
  chat: boolean;
}

interface Department {
  value: number;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: ' Lara Vel',
    department: 'Web Development',
    job_title: 'Junior Web Developer',
    chat: true
  },
  {
    position: 2,
    name: 'React Native',
    department: 'Web Development',
    job_title: 'Junior Web Developer',
    chat: true
  }
];

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'department',
    'job_title',
    'chat'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  departments: Department[] = [
    { value: 1, viewValue: 'Web Development' },
    { value: 2, viewValue: 'Data Analyst' },
    { value: 3, viewValue: 'Project Management' }
  ];

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
