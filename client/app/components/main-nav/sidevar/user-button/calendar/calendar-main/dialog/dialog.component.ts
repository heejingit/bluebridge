import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'calendar-main-dialog',
    templateUrl: './dialog.component.html',
  })
  export class ScheduleDetailDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ScheduleDetailDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }