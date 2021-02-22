import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateComponent } from './employees/create.component';
import { ListComponent } from './employees/list.component';

const routes: Routes = [
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
