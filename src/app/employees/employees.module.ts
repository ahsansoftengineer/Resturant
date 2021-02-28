import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // formGroup

import { CreateComponent } from './create.component';
import { ListComponent } from './list.component';
import { CreateEmployeeComponent } from './create-employee.component';

@NgModule({
  declarations: [CreateComponent, CreateEmployeeComponent, ListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ListComponent, ReactiveFormsModule],
  providers: [],
})
export class EmployeesModule {}
