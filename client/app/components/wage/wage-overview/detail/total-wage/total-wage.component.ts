import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { WageService } from '../../wage.service';

@Component({
  selector: 'app-total-wage',
  templateUrl: './total-wage.component.html',
  styleUrls: ['./total-wage.component.css']
})
export class TotalWageComponent implements OnInit {
  hourlyWage = 20;
  tax = 15;
  deductions = [
    {
      'reason': 'A',
      'amount': 100
    },
    {
      'reason': 'B',
      'amount': 200
    },
    {
      'reason': 'C',
      'amount': 300
    },
    {
      'reason': 'D',
      'amount': 400
    },
    {
      'reason': 'E',
      'amount': 500
    }
  ]
  totalDeductions = 0;

  totalHoursFloat = this.wageService.getTotalHoursFloat();

  // forms
  wageForm: FormGroup;
  taxForm: FormGroup;
  deductionsForm: FormGroup;

  constructor(private wageService: WageService) { }

  ngOnInit(): void {
    this.wageForm = new FormGroup({
      'hourlyWage': new FormControl(this.hourlyWage)
    });

    this.taxForm = new FormGroup({
      'tax': new FormControl(this.tax)
    });

    this.deductionsForm = new FormGroup({
      'reason': new FormControl(null),
      'amount': new FormControl(null)
    });

    this.getTotalDeductions();
  }

  onWageSubmit() {
    this.hourlyWage = this.wageForm.value.hourlyWage;
    console.log('hourlyWage: ', this.hourlyWage);
  }

  onTaxSubmit() {
    this.tax = this.taxForm.value.tax;
    console.log('tax: ', this.tax);
  }

  onDeductionsSubmit() {
    this.deductions.push(
      {
        'reason': this.deductionsForm.value.reason,
        'amount': parseFloat(this.deductionsForm.value.amount)
      }
    )
    this.deductionsForm.reset();
    this.getTotalDeductions();

    console.log('deductions: ', this.deductions);
  }

  getTotalDeductions() {
    this.totalDeductions = 0;
    this.deductions.map(x => {
      this.totalDeductions += x.amount;
    })
  }

  onRemoveDeduction(index) {
    this.deductions.splice(index, 1);
    this.getTotalDeductions();
    console.log(this.deductions.length);
  }
}
