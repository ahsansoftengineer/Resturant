import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  signupForm: FormGroup;
  hobbiesArray: AbstractControl[];
  constructor() {}
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.minLength(11),
        ]),
      }),
      hobbies: new FormArray([new FormControl(null, Validators.required)]),
      gender: new FormControl('male', Validators.required),
    });
    this.hobbiesArray = (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  onSubmit(form: FormGroup) {
    console.log(form);
  }
  onAddHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }
  getAllFormArray(): AbstractControl[] {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
