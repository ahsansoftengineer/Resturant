import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './employees/create.component';
import { ListComponent } from './employees/list.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    CreateComponent,
    ListComponent,

  ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
  providers: [EmployeeService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
