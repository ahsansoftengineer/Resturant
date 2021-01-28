import { Component, OnInit } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  constructor() {
    console.warn('Constructor Called!');
    this.employee = new Employee(105, 'a', 'b', 'c')
    this.employees.push
    this.employee.EmployeeList();
  }
  ngOnInit(){

  }
  addEmployee(){
    this.employee.EmployeeList().push(
      new Employee(106, 'Rabia','female','02-02-2002')
    )
    console.log(this.employee.EmployeeList())
  }
}
