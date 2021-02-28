import { NgModule } from '@angular/core';

import { CreateComponent } from './create.component';
import { ListComponent } from './list.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreateComponent, CreateEmployeeComponent, ListComponent],
  imports: [SharedModule, EmployeesRoutingModule],
  exports: [ListComponent, SharedModule],
  providers: [],
})
export class EmployeesModule {}
