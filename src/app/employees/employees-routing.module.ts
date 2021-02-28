import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { CreateComponent } from './create.component';
import { ListComponent } from './list.component';

const employeeRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit', component: CreateComponent },
  { path: 'edit/:id', component: CreateComponent },
  { path: '', component: ListComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(employeeRoutes)],
})
export class EmployeesRoutingModule {}
