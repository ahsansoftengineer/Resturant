import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../model/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
    export class ListComponent implements OnInit {
      public employees: IEmployee[];
      constructor(
        private _employeeService: EmployeeService,
        private _router: Router
      ) {}
      ngOnInit(): void {
        this._employeeService.getEmployees().subscribe(
          (listEmployees) => (this.employees = listEmployees),
          (err) => console.log(err)
        );
      }
      editButtonClick(employeeId: number) {
        this._router.navigate(['/edit', employeeId]);
      }
    }
