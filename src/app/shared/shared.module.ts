import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [],
  exports:[
    CommonModule, // ngIf, ngFor
    ReactiveFormsModule, // formGrup, FormControl, FormArray

  ]
})
export class SharedModule { }
