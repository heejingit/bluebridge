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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Heejin Jeon', department: 'Web Development', job_title: 'Junior Web Developer', chat: true},
  {position: 2, name: 'Woojin Oh', department: 'Web Development', job_title: 'Junior Web Developer', chat: true},
  {position: 3, name: 'Injun Hwang', department: 'Web Development', job_title: 'Junior Web Developer', chat: true},
  {position: 4, name: 'John Doe', department: 'Web Development', job_title: 'Senior Web Developer', chat: false},

];

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'department', 'job_title', 'chat'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
