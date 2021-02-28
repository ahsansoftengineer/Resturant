import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { CreateComponent } from './create.component';
import { ListComponent } from './list.component';

const employeeRoutes: Routes = [
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: CreateComponent },
  { path: 'edit/:id', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: ListComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(employeeRoutes)],
})
export class EmployeesRoutingModule {}
