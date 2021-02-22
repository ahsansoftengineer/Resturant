import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  templateUrl: './create-employee.component.html',
})
export class CreateEmployeeComponent implements OnInit {

  public bsDatepickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsDatepickerConfig = Object.assign(
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        daysDisabled: [0, 2, 5],
        datesDisabled: [new Date(2021, 0, 1), new Date('02/17/2021')],
        dateInputFormat: 'DD-MM-Y'
      })
  }
  public departments = [
    { id: 1, dept: 'Help Desk' },
    { id: 2, dept: 'HR' },
    { id: 3, dept: 'IT' },
    { id: 4, dept: 'Pay Roll' },
    { id: 5, dept: 'Admin' },
  ];
  ngOnInit(): void {}
  autoClose:boolean = true;
}
