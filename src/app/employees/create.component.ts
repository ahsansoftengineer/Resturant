import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    skills: new FormGroup({
      skillName: new FormControl(),
      experienceInYears: new FormControl(),
      proficiency: new FormControl(),
    }),
  });
  onLoadDataClick():void{
    this.createForm.setValue({
      name:'M Ahsan',
      email:'ahsansoftengineer@gmail.com',
      skills:{
        skillName:'C#',
        experienceInYears:5,
        proficiency:'advanced'
      }
    })
  }
  constructor() {}
  submittingMethod(createForm: FormGroup) {
    console.log(createForm.value);
  }

  ngOnInit(): void {}
}
